/*
 * spurtcommerce
 * version 2.1
 * www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, PLATFORM_ID, Inject} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    constructor(
        public listSandbox: ListsSandbox,
        @Inject(PLATFORM_ID) private platformId: Object) {
    }
    // Initially calls getBannerList,getBransList,getFeaturedList
    ngOnInit() {
        this.getFeaturedList();
        this.getBannerList();
        this.getBransList();
        this.getTodayDealList();
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('checkout');
        }
    }
    // fetch banner list from sandbox
    getBannerList() {
        const params: any = {};
        params.limit = 100;
        params.offset = 0;
        this.listSandbox.getBannerList(params);
    }
    // fetch brand list from sandbox

    getBransList() {
        const params: any = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    }
    // fetch featured product list from sandbox

    public getFeaturedList() {
        const params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        this.listSandbox.getFeaturedList(params);
    }
    // fetch getTodayDealList product list from sandbox
    public getTodayDealList() {
        const params: any = {};
        params.limit = 0;
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        this.listSandbox.getTodayDealList(params);
    }
}
