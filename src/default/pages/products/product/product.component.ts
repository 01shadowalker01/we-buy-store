/*
* spurtcommerce
* version 2.1
* http://api.spurtcommerce.com
*
* Copyright (c) 2019 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/
import {AfterViewInit} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';
import {ProductZoomComponent} from './product-zoom/product-zoom.component';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import {ConfigService} from '../../../../core/service/config.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})
export class ProductComponent implements OnInit, OnDestroy, AfterViewInit {
    // decorator
    @ViewChild('zoomViewer') zoomViewer;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    // configuration
    public config: SwiperConfigInterface = {};
    public product: any;
    // images
    public image: any;
    public zoomImage: any;
    public imagePath: string;
    public productImageId: number;
    // related product data
    public relatedProducts: Array<any>;
    // route params
    private sub: any;
    private id: any;
    public radioValue: any = 'jh';
    public totalPrice: number;
    public removeData: number;
    public removePrefix: number;
    private previousData: number;
    private previousPrefix: number;
    private temptotalPrice: number;
    // available options
    public optionNameSelected: any = [];
    public cartOptionValueArray: any = [];
    public optionNames: any = [];
    public optionValueArray: any = [];
    public previousValueRadio = '';
    public previousValueDropdown = '';
    public oneTimePush = 'enter';
    public oneTimePushValue = 'enter';
    public deleteArray = false;
    public modeSelect: string;
    // subcription
    private subscriptions: Array<Subscription> = [];

    constructor(private activatedRoute: ActivatedRoute,
                public dialog: MatDialog,
                public formBuilder: FormBuilder,
                public productDetail: ListsSandbox,
                private configService: ConfigService,
                private changeDetectRef: ChangeDetectorRef,
                private router: Router) {
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.router.navigated = true;
                window.scrollTo(0, 0);
            }
        });
    }

    /** Initially initialize getProductdetail,getRelatedProducts when subscribed
     * subscribe productDetails$ and set initially default values for required options **/
    ngOnInit() {
        this.totalPrice = 0;
        this.removeData = 0;
        this.removePrefix = 9;
        this.previousData = 0;
        this.temptotalPrice = 0;
        this.previousPrefix = 9;

        this.imagePath = this.configService.getImageUrl();
        // subscribe route params and trigger selected product detail, related products
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this.getProductdetail();
            this.getRelatedProducts();
        });
    }

    // calls getRelatedProducts with param
    getRelatedProducts() {
        const params: any = {};
        params.productId = this.id;
        this.productDetail.getRelatedProducts(params);
    }

    /**
     * calls productDetail getProductDetails with param.Then subscribe productDetail productDetails$
     *
     * Then store the image path  and image name in the array.
     * **/


    getProductdetail() {
        const params: any = {};
        params.id = this.id;
        this.productDetail.getProductDetails(params);
        this.subscriptions.push(this.productDetail.productDetails$.subscribe(detail => {
            if (detail && detail.productImage.length > 0) {
                const imageLength = detail.productImage.length;
                for (let i = 0; i < imageLength; i++) {
                    if (detail.productImage[i].defaultImage === 1) {
                        this.productImageId = detail.productImage[i].productImageId;
                        this.image = this.imagePath + '?width=390&height=390&path=' + detail.productImage[i].containerName + '&name=' + detail.productImage[i].image;
                        this.zoomImage = this.imagePath + '?width=660&height=660&path=' + detail.productImage[i].containerName + '&name=' + detail.productImage[i].image;
                        this.changeDetectRef.detectChanges();
                        setTimeout(() => {
                            this.config.observer = true;
                            this.changeDetectRef.detectChanges();
                        });
                    }
                }
            }
        }));
    }

    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            grabCursor: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: false,
            watchSlidesVisibility: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3,
                }
            }
        };
    }

    // view the selected image
    public selectImage(image, i) {
        this.productImageId = image.productImageId;
        this.image = this.imagePath + '?width=390&height=3900&path=' + image.containerName + '&name=' + image.image;
        this.zoomImage = this.imagePath + '?width=660&height=660&path=' + image.containerName + '&name=' + image.image;
    }

    // zoom the image when mouse got moved over the image
    public onMouseMove(e) {
        if (window.innerWidth >= 1280) {
            let image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            if (this.zoomImage) {
                zoomer = this.zoomViewer.nativeElement.children[0];
            }
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = 'block';
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    }

    // event when mouse clicked to zoom the image
    public onMouseLeave(event) {
        this.zoomViewer.nativeElement.children[0].style.display = 'none';
    }

    // open pop to view the zoom image
    public openZoomViewer() {
        this.dialog.open(ProductZoomComponent, {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    }
    emptyOutputDecorator(event) {

    }

    // unsubscribe subscribed events while destroy the page
    ngOnDestroy() {
        this.optionValueArray = [];
        this.sub.unsubscribe();
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}
