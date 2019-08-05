/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {MatDialog} from '@angular/material';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {ConfigService} from '../../../../core/service/config.service';


@Component({
    selector: 'app-products-carousel',
    templateUrl: './products-carousel.component.html',
    styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit, AfterViewInit {
    // decorator
    @Input() products: any;
    // configration
    public config: SwiperConfigInterface = {};
    // path of the image
    public imagePath: string;

    constructor(public dialog: MatDialog,
                private router: Router,
                private configService: ConfigService) {
    }

    // initially get data from config service
    ngOnInit() {
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
    }

    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 6,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
                1500: {
                    slidesPerView: 5,
                }
            }
        };
    }

    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    public openProductDialog(product) {
        const dialogRef = this.dialog.open(ProductDialogComponent, {
            data: product,
            panelClass: 'product-dialog'
        });
        dialogRef.afterClosed().subscribe(products => {
            if (products) {
                this.router.navigate(['/products/productdetails', products.id]);
            }
        });
    }

}
