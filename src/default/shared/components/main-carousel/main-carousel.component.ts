/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from 'ngx-swiper-wrapper';
import {ConfigService} from '../../../../core/service/config.service';
import {AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-main-carousel',
    templateUrl: './main-carousel.component.html',
    styleUrls: ['./main-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCarouselComponent implements OnInit, AfterViewInit {
    // decorator
    @Input() slides: Array<any> = [];
    // configration
    public config: SwiperConfigInterface = {};
    // path of the image
    public imagePath: string;
    // pagination purpose
    private pagination: SwiperPaginationInterface = {
        el: '.swiper-pagination',
        clickable: true
    };

    constructor(private configService: ConfigService, private router: Router) {
    }

    // initially get data from config service
    ngOnInit() {
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();

    }

    // swipper for banners
    ngAfterViewInit() {
        this.config = {
            updateOnImagesReady: true,
            observer: true,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: true,
            threshold: 1,
            preloadImages: true,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: 'slide'
        };

    }
        // navigate to all products
    public allProducts() {
        this.router.navigate(['/products']);
    }

}
