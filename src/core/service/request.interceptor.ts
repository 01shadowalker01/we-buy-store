/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpResponse
} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {NgxSpinnerService} from 'ngx-spinner';
import {TranslateService} from '@ngx-translate/core';
import {ConfigService} from './config.service';
import {isPlatformBrowser} from '@angular/common';
import {Injectable, Inject, PLATFORM_ID} from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    protected userTokenDetail: any = {};

    constructor(public snackBar: MatSnackBar,
                private spinner: NgxSpinnerService,
                public configService: ConfigService,
                @Inject(PLATFORM_ID) private platformId: Object) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // this.spinner.show();
        if (isPlatformBrowser(this.platformId)) {
            this.userTokenDetail = localStorage.getItem('userToken');
        }
        if (this.userTokenDetail) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.userTokenDetail
                }
            });
        }

        return next.handle(req).pipe(
            map((user: any) => {
                if (user instanceof HttpResponse) {
                    const response = user.body;
                    if (response.message && response.message !== '' && req.method !== 'GET') {
                        this.showSuccess(user.body.message);
                    }

                }
                return user;
            }),
            catchError(response => {
                this.spinner.hide();
                if (response.status === 200 || response.status === 201) {
                    return response;
                }
                switch (response.status) {
                    case 400:

                        this.handleBadRequest(response);
                        break;
                    case 403:

                        this.handleUnAuthorized();
                        break;
                    default:
                        break;
                }
                return throwError(response);
            })
        );

    }


    /**
     * Shows notification errors when server response status is 401
     *
     * @params error
     */
    private handleBadRequest(responseBody: any): void {
        if (responseBody.error) {
            try {
                const bodyParsed = responseBody.error;
                this.handleErrorMessages(bodyParsed);
            } catch (error) {

            }
        }
        // else this.handleServerError();
    }

    private handleErrorMessages(response: any): void {
        if (!response) {
            return;
        } else {
            this.showNotificationError(response.message);
        }
    }

    /**
     * redirect to login if un authorized
     *
     */
    private handleUnAuthorized() {
        localStorage.clear();
    }

    /**
     * Shows error notification with given title and message
     *
     * @params title
     * @params message
     */
    private showNotificationError(message: string): void {
        this.snackBar.open(message, '×', {
            panelClass: 'error',
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 3000
        });
    }

    /**
     * Shows Success notification with given title and message
     *
     * @params title
     * @params message
     */
    private showSuccess(message) {
        this.snackBar.open(message, '×', {
            panelClass: 'success',
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 3000
        });
    }
}
