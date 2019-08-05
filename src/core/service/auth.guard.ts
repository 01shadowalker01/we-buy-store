/*
* SpurtCommerce
* version 2.1
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.checkLogin(state.url);
    }
    /* checklogin action*/

    checkLogin(url: string): Promise<boolean> | boolean {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const underMaintenance = JSON.parse(sessionStorage.getItem('maintenanceMode'));
        if (underMaintenance === true) {
            if (url === '/underdeveloping') {
                return true;
            } else {
                this.router.navigate(['/underdeveloping']);
                return false;
            }
            return true;
        } else {
            if (currentUser) {
                if (url === '/auth') {
                    // Navigate to the login page with extras (once login again pass the ./auth url it redirect to home page)
                    this.router.navigate(['/']);
                    return false;
                }
                return true;
            } else {
                // at login time
                if (url === '/auth') {
                    return true;
                }
            }
        }
        // Navigate to the login page with extras
        this.router.navigate(['/auth']);
        return false;
    }

}
