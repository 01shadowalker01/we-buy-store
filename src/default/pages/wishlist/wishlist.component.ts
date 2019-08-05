/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {WishlistSandbox} from '../../../core/wishlist/wishlist.sandbox';
import {ConfigService} from '../../../core/service/config.service';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    providers: [ProductControlSandbox]
})
export class WishlistComponent implements OnInit {
    // items added
    public quantity = 1;
    // image
    public imagePath: string;

    constructor(public snackBar: MatSnackBar, public wishlistSandbox: WishlistSandbox,
                public productControl: ProductControlSandbox,
                private listSandbox: ListsSandbox,
                private  configService: ConfigService) {
    }

    // Initially calls wishlistSandbox getWishlist with default param
    ngOnInit() {
        this.imagePath = this.configService.getImageUrl();
        const params: any = {};
        params.limit = 10;
        params.offset = '';
        this.wishlistSandbox.getWishlist(params);
    }

    // remove product from wishlist
    public remove(productId) {
        const params: any = {};
        params.wishlistProductId = productId;
        this.wishlistSandbox.deleteWishlist(params);
    }


    // add product from wishlist to cart
    public addToCart(products) {
        if (products.product.optionRequired === 1) {
            const params: any = {};
            params.id = products.product.productId;
            this.listSandbox.getProductDetailsMandatory(params);
        } else {
            const params: any = {};
            params.id = products.product.productId;
            this.listSandbox.whishLists(params);
        }
    }
}
