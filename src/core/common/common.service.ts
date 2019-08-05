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


@Injectable()
export class CommonService extends Api {

    // private base: string = this.getBaseUrl();
    private base: string;

    /* get wishlist count api*/
    public getWishlistCount(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'customer/wishlist-product-list', {params: params});
    }

    /* get profile api*/
    public doGetProfile(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'customer/get-profile');
    }

    /* get language api*/
    public getLanguage(params: any): Observable<any> {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'list/language-list', {params: params});
    }

}
