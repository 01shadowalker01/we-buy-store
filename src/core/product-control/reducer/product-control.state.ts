/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Map, Record} from 'immutable';
import {PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';


export interface ProductControlState extends Map<string, any> {
    wishlist: any;
    cartList: any;
    selectedOptions: any;
    optionsAvailable: any;
    cartCount: any;
    totalCartPrice: any;
    checkedOut: any;
    checkoutLoading: any;
    checkoutLoaded: any;
    checkoutFailed: any;
}

export class ProductControl {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            // this.cartList: sessionStorage.getItem('selectedProducts') ? JSON.parse(sessionStorage.getItem('selectedProducts')) : [],
            //  this.cartCount: sessionStorage.getItem('selectedProductsCount') ? parseFloat(sessionStorage.getItem('selectedProductsCount')) : 0,
            //  this.totalCartPrice: sessionStorage.getItem('productTotal') ? parseFloat(sessionStorage.getItem('productTotal')) : 0,
        }
    }
}

export const productControlRecord = Record({
    wishlist: [],
    // cartList: sessionStorage.getItem('selectedProducts') ? JSON.parse(sessionStorage.getItem('selectedProducts')) : [],
    //  cartCount: sessionStorage.getItem('selectedProductsCount') ? parseFloat(sessionStorage.getItem('selectedProductsCount')) : 0,
    // totalCartPrice: sessionStorage.getItem('productTotal') ? parseFloat(sessionStorage.getItem('productTotal')) : 0,
    cartList: [],
    cartCount: [],
    totalCartPrice: [],
    checkedOut: [],
    optionsAvailable: {},
    selectedOptions: [],

    checkoutLoading: false,
    checkoutLoaded: false,
    checkoutFailed: false,
});
