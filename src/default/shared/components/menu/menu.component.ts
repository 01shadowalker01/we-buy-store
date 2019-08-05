/*
 * spurtcommerce
 * version 2.1
 * www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import {Router} from '@angular/router';
import {MatMenuTrigger} from '@angular/material';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    // decorators
    @Input() categories: any;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    // param calls getProductList
    private brand: number;
    // local storage
    public clearBrand: string;
    // selecting  category index
    public index: number;
    // category hover
    public hover: any;
    // category id  from event
    public categoryId: string;
    // make category active
    public categorylinkActive: string;

    constructor(public listSandbox: ListsSandbox,
                public router: Router) {
    }

    ngOnInit() {
    }

    openMegaMenu() {
        const pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    }

    /**   calls listSandbox getProductList,And listSandbox getProductCount,
     * Navigate to products component,
     * Remove brandKey local storage.
     * Remove clearBrandKey local storage.
     * Remove brandSelectionKey local storage.
     * @param limit set as default
     * @param offset set as default
     * @param manufacturerId set as default
     * @param categoryId set as default
     * @param keyword set as default
     * @param price set as default
     * @param priceFrom set as default
     * @param priceTo set as default
     * @param count set as default
     * **/
    getProduct() {
        this.categoryId = '';
        this.categorylinkActive = '';
        localStorage.removeItem('brandKey');
        localStorage.removeItem('categoryIdKey');
        localStorage.removeItem('brandSelectionKey');
        const param: any = {};
        param.limit = 10;
        param.offset = 0;
        param.manufacturerId = '';
        param.categoryId = '';
        param.keyword = '';
        param.price = '';
        param.priceFrom = '';
        param.priceTo = '';
        this.listSandbox.getProductList(param);
        param.count = true;
        this.listSandbox.getProductCount(param);
        this.listSandbox.getSettings();
        localStorage.setItem('clearBrandKey', this.clearBrand);

    }

    // calls listSandbox getSettings,navigate to home page
    homePage() {
        this.listSandbox.getSettings();
        this.router.navigate(['/']);

    }

    /** index for selecting categories.
     * @param index from event
     * @param categoryId from event
     * **/
    indexData(index, id) {
        this.index = index;
        this.categoryId = id;
        this.trigger.openMenu();
        this.openMegaMenu();
    }

    // Make category link active if category got selected
    linkActive() {
        this.categorylinkActive = this.categoryId;
    }

    /**
     * calls listSandbox productFilterData and send the value
     * @param productFilter set default value getting from template file
     */
    sendUniqueId(productFilter) {
        this.listSandbox.productFilterData.next(productFilter);
    }

    // getcategoryId value
    getCategory(id) {
        const params: any = {};
        params.CategoryId = id;
        this.listSandbox.getCategory(params);
    }

    // getChildCategory value
    getChildCategory(id) {
        const params: any = {};
        params.CategoryId = id;
        this.listSandbox.getCategory(params);
    }
}
