/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ProductControlSandbox} from '../../../../core/product-control/product-control.sandbox';
import {Router} from '@angular/router';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';


@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
    // decorator
    @Input() product: any;
    @Input() type: string;
    @Input() cartOptionValueArray: any;
    @Input() optionValueArray: any = [];
    @Input() optionNameSelected: any;
    @Input() totalPrice = 0;
    @Output() OpenProductDialog: EventEmitter<any> = new EventEmitter();
    @Output() emptyDecorator: EventEmitter<any> = new EventEmitter();
    @Output() QuantityChange: EventEmitter<any> = new EventEmitter<any>();
    // pagination count
    public count = 1;
    public align = 'center center';
    // whislist
    public quantity: any = 1;
    public isWish: any = {};
    public products: any;

    constructor(public snackBar: MatSnackBar,
                public controlSandbox: ProductControlSandbox,
                public listSandbox: ListsSandbox,
                private router: Router) {
    }

    // intially get the cart data and calls layoutAlign
    ngOnInit() {
        if (this.product) {
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    }

    // align layout based on condition type
    public layoutAlign() {
        if (this.type === 'all') {
            this.align = 'space-between center';
        } else if (this.type === 'wish') {
            this.align = 'start center';
        } else if (this.type === 'detail') {
            this.align = 'start center';
        } else if (this.type === 'home') {
            this.align = 'start center';
        } else {
            this.align = 'center center';
        }
    }

    // change quantity of the product
    public changeCount(operation) {
        const product: any = {};
        if (operation === 'remove' && (this.quantity > 1)) {
            this.quantity -= 1;
        } else if (operation === 'add') {
            this.quantity += 1;
        }

    }

    // add product to wishlist
    public addToWishList(product) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser) {
            const params: any = {};
            params.productId = product.productId;
            this.controlSandbox.addToWishlist(params);
        } else {
            this.router.navigate(['/auth']);
        }
    }

    // add product to cart

    public addToCart(product) {
        if (product.optionRequired === 1 && this.optionValueArray.length === 0) {
            const params: any = {};
            params.id = product.productId;
            this.listSandbox.getProductDetailsMandatory(params);
        } else {
            this.products = product;
            const param: any = {};
            param.totalOptions = this.totalPrice;
            param._optionValueArray = this.optionValueArray;
            product.productCount = this.quantity;
            product._optionValueArray = this.optionValueArray;
            this.controlSandbox.selectedOptions(param);
            this.controlSandbox.addItemsToCart(product, param);
            this.emptyData();
        }
    }

    // clear the decorator optionValueArray value in the product detail component
    public emptyData() {
        this.emptyDecorator.emit('clear');
    }

    // emit the data from open product dialoug component
    public openProductDialog(event) {
        this.OpenProductDialog.emit(event);
    }

    // emit quantity while changing
    public changeQuantity(value) {
        this.QuantityChange.emit(value);
    }

}
