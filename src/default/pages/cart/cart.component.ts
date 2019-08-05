/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {ConfigService} from '../../../core/service/config.service';
import {Router} from '@angular/router';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    // image
    public imagePath: string;
    public semiColon = ':';

    constructor(public productControl: ProductControlSandbox,
                private configService: ConfigService,
                private listSandbox: ListsSandbox,
                public router: Router,
                private changeDetectRef: ChangeDetectorRef) {
    }

    // initially get configService data and subscribe cartlist response
    ngOnInit() {
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        this.productControl.cartlist$.subscribe(data => {
            this.changeDetectRef.detectChanges();
        });
    }

    // increase or decrease product count
    changeCount(product, operation) {
        this.productControl.ChangeCount(product, operation);
    }

    // remove product from cart
    removeProduct(product) {
        this.productControl.removeItemFromCart(product);
    }

    // clear cart
    public clear() {
        this.productControl.clearCart();
    }

    // navigation to checkout component.And set local storage
    public checkoutPage() {
        const checkoutToken = '1';
        this.router.navigate(['/checkout']);
        localStorage.setItem('checkout', checkoutToken);

    }

}
