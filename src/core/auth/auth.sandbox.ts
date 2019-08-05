/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as authAction from './action/auth.action';

import * as store from '../state.interface';
import {
    get_loginFailed, get_loginLoaded, get_loginLoading, get_recoverFailed, get_recoverLoaded, get_recoverLoading,
    get_registerFailed,
    get_registerLoaded,
    get_registerLoading,
    getToken
} from './reducer/auth.selector';
 import {LoginModel} from './models/login.model';
import {RegisterModel} from './models/register.model';
import {CommonSandbox} from '../common/common.sandbox';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';



@Injectable()
export class AuthSandbox {
    private subscriptions: Array<Subscription> = [];
    /* login status*/
    public userToken$ = this.appState$.select(getToken);
    public loginLoading$ = this.appState$.select(get_loginLoading);
    public loginLoaded$ = this.appState$.select(get_loginLoaded);
    public loginFailed$ = this.appState$.select(get_loginFailed);
    /* register status*/
    public registerLoading$ = this.appState$.select(get_registerLoading);
    public registerLoaded$ = this.appState$.select(get_registerLoaded);
    public registerFailed$ = this.appState$.select(get_registerFailed);
    /* recover account status*/
    public recoverLoading$ = this.appState$.select(get_recoverLoading);
    public recoverLoaded$ = this.appState$.select(get_recoverLoaded);
    public recoverFailed$ = this.appState$.select(get_recoverFailed);


    constructor(
         private router: Router,
         protected appState$: Store<store.AppState>,
         public commonSandbox: CommonSandbox,
         @Inject(PLATFORM_ID) private platformId: Object) {

        this.registerEvents();
    }

    public doLogin(params): void {
        this.appState$.dispatch(new authAction.DoLogin(new LoginModel(params)));
    }
    public doRegister(params): void {
        this.appState$.dispatch(new authAction.DoRegister(new RegisterModel(params)));
    }
    public doRecover(params): void {
        this.appState$.dispatch(new authAction.RecoverAccount(params));
    }

    /**
     * Registers events
     */
    public registerEvents() {
        this.subscriptions.push( this.userToken$.subscribe(token => {
            if (token) {
                // if (isPlatformServer(this.platformId)) {
                //     localStorage.setItem('userToken', token.token);
                //     localStorage.setItem('user', JSON.stringify(token.user));
                // }
                // if (isPlatformBrowser(this.platformId)) {
                //     localStorage.setItem('userToken', token.token);
                //     localStorage.setItem('user', JSON.stringify(token.user));
                // }
                localStorage.setItem('userToken', token.token);
                localStorage.setItem('user', JSON.stringify(token.user));
                this.commonSandbox.doGetProfile();
                this.commonSandbox.getWishlistCounts({count: true});
                const data = localStorage.getItem('checkout');
                if (localStorage.getItem('checkout')) {
                    this.router.navigate(['/checkout']);
                } else {
                    this.router.navigate(['/']);
                }

            }
        }));
    }

    /**
     * Un registers events
     */
    public unsubscribeEvents() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}
