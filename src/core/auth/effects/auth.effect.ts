/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError } from 'rxjs/internal/operators';
import {LoginResponseModel} from '../models/loginResponse.model';
import {AuthApiService} from '../auth.service';
import * as actions from './../action/auth.action';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,
                private authApi: AuthApiService,
                private appState$: Store<store.AppState>) {
    }

    @Effect()
    login$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_LOGIN),
            map((action: actions.DoLogin) => action.payload),
            switchMap((state) => {
                return this.authApi.doLogin(state)
                    .pipe(
                        map((loggedin) => new actions.DoLoginSuccess(new LoginResponseModel(loggedin))),
                        catchError(error => of(new actions.DoLoginFail(new LoginResponseModel(error)))
                    ));
            })
        );

    @Effect()
    register$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_REGISTER),
            map((action: actions.DoRegister) => action.payload),
            switchMap((state) => {
                if (state.phoneNumber === '') {
                    delete state.phoneNumber;
                }
                return this.authApi.doRegister(state)
                    .pipe(
                        map((register) => new actions.DoRegisterSuccess(register)),
                        catchError(error => of(new actions.DoRegisterFail(error)))
                    );
            })
        );

    @Effect()
    recover$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_RECOVER),
            map((action: actions.RecoverAccount) => action.payload),
            switchMap((state) => {
                return this.authApi.doRecover(state)
                    .pipe(
                        map((register) => new actions.RecoverAccountSuccess(register)),
                        catchError(error => of(new actions.RecoverAccountFail(error)))
                    );
            })
        );
}
