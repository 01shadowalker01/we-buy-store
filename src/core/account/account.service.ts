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
import {Observable} from 'rxjs';
import {Api} from '../providers/api/api';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class AccountService extends Api {

    private base: string = this.getBaseUrl();
    public userTokenDetail = localStorage.getItem('userToken');
    public customerAddAddress: any;

    /* call change password api*/
    public doChangePassword(params: any): Observable<any> {
        return this.http.post(this.base + 'customer/change-password', params);
    }

    /* call edit profile api*/
    public doEditProfile(params: any): Observable<any> {
        return this.http.post(this.base + 'customer/edit-profile', params);
    }

    /* get order history list api*/
    public getOrderHistory(params: any): Observable<any> {
        return this.http.get(this.base + 'orders/order-list', {params: params});
    }

    /* get order history detail api*/
    public getOrderDetail(params: any): Observable<any> {
        return this.http.get(this.base + 'orders/order-detail', {params: params});
    }

    /* get customer address list api*/
    public getCustomerAddressList(params: any): Observable<any> {
        return this.http.get(this.base + 'CustomerAddress/get-address-list', {params: params});
    }

    /* add customer address api*/
    public addCustomerAddress(params: any): Observable<any> {
        return this.http.post(this.base + 'CustomerAddress/add-address', params);
    }
    /* set customer address details */
    public setCustomerAddress(addressDetails) {
        this.customerAddAddress = addressDetails;
    }
    /* get customer address details */

    public getCustomerAddress() {
        return this.customerAddAddress;
    }

    /* update customer address api*/

    public updateCustomerAddress(params): Observable<any> {
        return this.http.put(this.base + 'CustomerAddress/update-address/' + params.addressId, params);
    }

    /**
     * Handles 'AddressDelete' function. Calls delete method with specific api address
     * along its param.
     *
     * @param params from ProductDeleteModel
     */
    public deleteAddress(params): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: {addressId: params.addressId}
        };

        return this.http.delete(this.base + 'CustomerAddress/delete-address/' + params.addressId, httpOptions);

    }

    /* get rating detail api*/
    public getRatingDetails(params) {
        return this.http.post(this.base + 'orders/add-rating', params);
    }

    /* get review detail api*/
    public getReviewDetails(params) {
        return this.http.post(this.base + 'orders/add-reviews', params);
    }

}
