import {Subject} from 'rxjs';
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
import * as authAction from './action/account.action';
import * as store from '../state.interface';
import {ChangePasswordModel} from './models/changePassword.model';
import {
    getChangepasswordFailed,
    getChangepasswordLoaded,
    getChangepasswordLoading, getEditProfileFailed, getEditProfileLoaded, getEditProfileLoading, getEdittedStatus,
    getHistoryListFailed, getHistoryListLoaded, getHistoryListLoading, getNewPassword, getOrderHistoryDetail,
    getOrderHistoryList, getOrderHistoryDetailLoading, getOrderHistoryDetailFailed, getOrderHistoryDetailLoaded,
    getorderHistoryCount, getAddressList, getAddressListLoading, getAddressListLoaded, getAddressListFailed,
    getAddAddress, getAddAddressLoading, getAddAddressLoaded , getAddAddressFailed, getUpdateAddress, getUpdateAddressLoading,
    getUpdateAddressLoaded, getUpdateAddressFailed, getDeleteAddress, getDeleteAddressLoading, getDeleteAddressLoaded, getDeleteAddressFailed,
    getReview,
    getReviewLoading,
    getReviewLoaded,
    getReviewFailed,
    getRating,
    getRatingLoading,
    getRatingLoaded,
    getRatingFailed
} from './reducer/account.selector';
import {EditProfileModal} from './models/editProfile.modal';
import {OrderHistoryRequestModel} from './models/order-history-request.model';
import {CommonSandbox} from '../common/common.sandbox';
import {AddressModel} from './models/address.model';


@Injectable()
export class AccountSandbox {
    /* order history detail*/
    public orderHistoryList$ = this.appState$.select(getOrderHistoryList);
    public orderHistoryCount$ = this.appState$.select(getorderHistoryCount);
    public orderHistoryDetail$ = this.appState$.select(getOrderHistoryDetail);
    public orderHistoryDetailLoaded$ = this.appState$.select(getOrderHistoryDetailLoaded);
    public orderHistoryDetailLoading$ = this.appState$.select(getOrderHistoryDetailLoading);
    public orderHistoryDetailFailed$ = this.appState$.select(getOrderHistoryDetailFailed);
    /* order history */
    public historyListLoaded$ = this.appState$.select(getHistoryListLoaded);
    public historyListLoading$ = this.appState$.select(getHistoryListLoading);
    public historyListFailed$ = this.appState$.select(getHistoryListFailed);
    /* change password */
    public newPassword$ = this.appState$.select(getNewPassword);
    public changePasswordLoading$ = this.appState$.select(getChangepasswordLoading);
    public changePasswordLoaded$ = this.appState$.select(getChangepasswordLoaded);
    public changePasswordFailed$ = this.appState$.select(getChangepasswordFailed);
    /* edit profile */
    public getEdittedStatus$ = this.appState$.select(getEdittedStatus);
    public getEditProfileLoaded$ = this.appState$.select(getEditProfileLoaded);
    public getEditProfileLoading$ = this.appState$.select(getEditProfileLoading);
    public getEditProfileFailed$ = this.appState$.select(getEditProfileFailed);
    /* Address List */

    public getCustAddressList$ = this.appState$.select(getAddressList);
    public getCustAddressListLoaded$ = this.appState$.select(getAddressListLoading);
    public getCustAddressListLoading$ = this.appState$.select(getAddressListLoaded);
    public getCustAddressListFailed$ = this.appState$.select(getAddressListFailed);

    // add rating
    public getReview$ = this.appState$.select(getReview);
    public getReviewLoading$ = this.appState$.select(getReviewLoading);
    public getReviewLoaded$ = this.appState$.select(getReviewLoaded);
    public getReviewFailed$ = this.appState$.select(getReviewFailed);
    // add review
    public getRating$ = this.appState$.select(getRating);
    public getRatingLoading$ = this.appState$.select(getRatingLoading);
    public getRatingLoaded$ = this.appState$.select(getRatingLoaded);
    public getRatingFailed$ = this.appState$.select(getRatingFailed);

    /* Add Address */
    public getCustAddAddress$ = this.appState$.select(getAddAddress);

    /* Update Address */
    public getCustUpdateAddress$ = this.appState$.select(getUpdateAddress);

    /* Delete Address  */
    public getCustDeleteAddress$ = this.appState$.select(getDeleteAddress);


    private subscriptions: Array<Subscription> = [];
    public getCustomerAddressList: any = {};
    profileImageData = new Subject<any>();

    constructor(private router: Router,
                protected appState$: Store<store.AppState>,
                public commonSandbox: CommonSandbox) {
        this.registerEvents();
    }

    /**
     * trigger change password action
     */
    public doChangepassword(params): void {
        this.appState$.dispatch(new authAction.ChangePassword(new ChangePasswordModel(params)));
    }

    /**
     * trigger edit profile action
     */
    public doEditProfile(params): void {
        this.appState$.dispatch(new authAction.EditProfile(new EditProfileModal(params)));
    }

    /**
     * trigger get order history action
     */
    public getOrderHistory(params): void {
        this.appState$.dispatch(new authAction.GetOrderHistory(new OrderHistoryRequestModel(params)));
    }

    /**
     * trigger get order history count action
     */
    public getOrderHistoryCount(params): void {
        this.appState$.dispatch(new authAction.GetOrderHistoryCount(new OrderHistoryRequestModel(params)));
    }

    /**
     * trigger get order history detail action
     */
    public getOrderDetail(params): void {
        this.appState$.dispatch(new authAction.GetOrderDetail(params));
    }

    /**
     * clear state value of the order detail
     */
    public clearDetail(): void {
        this.appState$.dispatch(new authAction.ClearOrderDetail());
    }
    // add review
    public addReview(value) {
        this.appState$.dispatch(new authAction.ReviewDetail(value));
    }

    // add rating
    public addRatings(value) {
        this.appState$.dispatch(new authAction.RatingDetail(value));
    }
    /**
     * trigger get customer address list action
     */
    public getAddressList(params): void {
        this.appState$.dispatch(new authAction.GetCustomerAddressList(params));
    }

    /**
     * trigger Add customer address  action
     */
    public addCustomerAddress(params): void {
        this.appState$.dispatch(new authAction.AddCustomerAddress (new AddressModel(params)));
    }

    /**
     * trigger Update customer address  action
     */
    public updateCustomerAddress(params): void {
        this.appState$.dispatch(new authAction.UpdateCustomerAddress(params));
    }

    /**
     * trigger Update customer address  action
     */
    public deleteCustomerAddress(params): void {
        this.appState$.dispatch(new authAction.DeleteCustomerAddress(params));
    }
    /**
     * subscribe events
     */
    public registerEvents() {
        this.subscriptions.push(this.newPassword$.subscribe(password => {
            if (password) {
                if (password.message) {
                    this.router.navigate(['/']);
                }
            }
        }));

        this.subscriptions.push(this.getEdittedStatus$.subscribe(edit => {
            if (edit && edit.status === 1) {
                this.commonSandbox.doGetProfile();
                this.router.navigate(['/']);
            }
        }));

        this.subscriptions.push(this.getCustAddAddress$.subscribe(data => {
            if (data && data.status === 1) {
                this.router.navigate(['/account/addresses']);
            }
        }));

        this.subscriptions.push(this.getCustUpdateAddress$.subscribe(data => {
            if (data && data.status === 1) {
                this.router.navigate(['/account/addresses']);
            }

        }));

        this.subscriptions.push(this.getCustDeleteAddress$.subscribe(data => {
            if (data && data.status === 1) {
                this.router.navigate(['/account/addresses']);
            }

        }));

    }
}
