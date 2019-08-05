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
import * as actions from './../action/account.action';
import {AccountService} from '../account.service';

@Injectable()
export class AccountEffect {
    constructor(private actions$: Actions,
                private authApi: AccountService,
                private appState$: Store<store.AppState>) {
    }

    @Effect()
    changePassword$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_CHANGE_PASSWORD),
            map((action: actions.ChangePassword) => action.payload),
            switchMap((state) => {
                return this.authApi.doChangePassword(state)
                    .pipe(
                        map((register) => new actions.ChangePasswordSuccess(register)),
                        catchError(error => of(new actions.ChangePasswordFail(error)))
                    );
            })
        );

    @Effect()
    editProfile$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.EDIT_PROFILE),
            map((action: actions.EditProfile) => action.payload),
            switchMap((state) => {
                if (state.password === '') {
                    delete state.password;
                }
                return this.authApi.doEditProfile(state)
                    .pipe(
                        map((profile) => new actions.EditProfileSuccess(profile)),
                        catchError(error => of(new actions.EditProfileFail(error)))
                    );
            })
        );
    @Effect()
    orderHistory$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_ORDER_HISTORY),
            map((action: actions.GetOrderHistory) => action.payload),
            switchMap((state) => {
                return this.authApi.getOrderHistory(state)
                    .pipe(
                        map((orders) => new actions.GetOrderHistorySuccess(orders)),
                        catchError(error => of(new actions.GetOrderHistoryFail(error)))
                    );
            })
        );
    @Effect()
    orderHistoryCount$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_ORDER_HISTORY_COUNT),
            map((action: actions.GetOrderHistoryCount) => action.payload),
            switchMap((state) => {
                return this.authApi.getOrderHistory(state)
                    .pipe(
                        map((orders) => new actions.GetOrderHistoryCountSuccess(orders)),
                        catchError(error => of(new actions.GetOrderHistoryCountFail(error)))
                    );
            })
        );
    @Effect()
    orderDetail$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_ORDER_DETAIL),
            map((action: actions.GetOrderDetail) => action.payload),
            switchMap((state) => {
                return this.authApi.getOrderDetail(state)
                    .pipe(
                        map((orders) => new actions.GetOrderDetailSuccess(orders)),
                        catchError(error => of(new actions.GetOrderDetailFail(error)))
                    );
            })
        );

    @Effect()
    addresslist$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_CUSTOMER_ADDRESSLIST),
            map((action: actions.GetCustomerAddressList) => action.payload),
            switchMap((state) => {
                return this.authApi.getCustomerAddressList(state)
                    .pipe(
                        map((orders) => new actions.GetCustomerAddressListSuccess(orders)),
                        catchError(error => of(new actions.GetCustomerAddressListFail(error)))
                    );
            })
        );

    @Effect()
    addaddress$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.ADD_CUSTOMER_ADDRESS),
            map((action: actions.AddCustomerAddress) => action.payload),
            switchMap((state) => {
                return this.authApi.addCustomerAddress(state)
                    .pipe(
                        map((orders) => new actions.AddCustomerAddressSuccess(orders)),
                        catchError(error => of(new actions.AddCustomerAddressFail(error)))
                    );
            })
        );

    @Effect()
    updateaddress$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.UPDATE_CUSTOMER_ADDRESS),
            map((action: actions.UpdateCustomerAddress) => action.payload),
            switchMap((state) => {
                return this.authApi.updateCustomerAddress(state)
                    .pipe(
                        map((orders) => new actions.UpdateCustomerAddressSuccess(orders)),
                        catchError(error => of(new actions.UpdateCustomerAddressFail(error)))
                    );
            })
        );

    @Effect()
    deleteaddress$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DELETE_CUSTOMER_ADDRESS),
            map((action: actions.DeleteCustomerAddress) => action.payload),
            switchMap((state) => {
                return this.authApi.deleteAddress(state)
                    .pipe(
                        map((orders) => new actions.DeleteCustomerAddressSuccess(orders)),
                        catchError(error => of(new actions.DeleteCustomerAddressFail(error)))
                    );
            })
        );

    @Effect()
    getReviews$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_REVIEW_DETAIL),
            map((action: actions.ReviewDetail) => action.payload),
            switchMap((state) => {
                return this.authApi.getReviewDetails(state)
                    .pipe(
                        map((data) => new actions.ReviewDetailSuccess(data)),
                        catchError(error => of(new actions.ReviewDetailFail(error)))
                    );
            })
        );

    @Effect()
    getRatings$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.GET_RATING_DETAIL),
            map((action: actions.RatingDetail) => action.payload),
            switchMap((state) => {
                return this.authApi.getRatingDetails(state)
                    .pipe(
                        map((orders) => new actions.RatingDetailSuccess(orders)),
                        catchError(error => of(new actions.RatingDetailFail(error)))
                    );
            })
        );


}
