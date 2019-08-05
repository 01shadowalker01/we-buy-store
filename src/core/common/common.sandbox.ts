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
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import * as commonAction from './action/common.action';
import * as store from '../state.interface';
import {
    getLanguage,
    getProfile, profileFailed, profileLoaded,
    profileLoading, wishlistCount,
    wishlistCountFailed, wishlistCountLoaded,
    wishlistCountLoading
} from './reducer/common.selector';




@Injectable()
export class CommonSandbox {
    /* get wishlist count status*/
    public wishlistCount$ = this.appState$.select(wishlistCount);
    public wishlistCountLoading$ = this.appState$.select(wishlistCountLoading);
    public wishlistCountLoaded$ = this.appState$.select(wishlistCountLoaded);
    public wishlistCountFailed$ = this.appState$.select(wishlistCountFailed);
    /* get profile status*/
    public getProfile$ = this.appState$.select(getProfile);
    public profileLoading$ = this.appState$.select(profileLoading);
    public profileLoaded$ = this.appState$.select(profileLoaded);
    public profileFailed$ = this.appState$.select(profileFailed);

    public getLanguageList$ = this.appState$.select(getLanguage);

    private subscriptions: Array<Subscription> = [];
    constructor(private router: Router,
                protected appState$: Store<store.AppState>,
               ) {
        this.registerEvents();
    }

    public getWishlistCounts(params): void {
        this.appState$.dispatch(new commonAction.GetWishlistCount(params));
    }
    public doGetProfile(): void {
        this.appState$.dispatch(new commonAction.GetProfile());
    }
    public doSignout(): void {
        this.appState$.dispatch(new commonAction.DoSignOut());
    }
    public getLanguageList(params) {
        this.appState$.dispatch(new commonAction.GetLanguage(params));
    }
    public registerEvents() {


    }
}
