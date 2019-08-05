/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigService} from '../../../../core/service/config.service';
import {CommonSandbox} from '../../../../core/common/common.sandbox';
import {TranslateService} from '@ngx-translate/core';
import {ProductControlSandbox} from '../../../../core/product-control/product-control.sandbox';
import {environment} from '../../../../environments/environment';
import {isPlatformBrowser} from '@angular/common';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
})
export class TopMenuComponent implements OnInit {
    // path of the image
    public imagePath: any;
    // menu
    public accountMenuTrigger: any;
    // language selection
    public language: any;
    // public languageKey = 'language';
    public languageList = [];
    public index = 0;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                public configService: ConfigService,
                public router: Router, public listSandbox: ListsSandbox,
                public commonSandbox: CommonSandbox,
                public productControl: ProductControlSandbox,
                private translate: TranslateService) {
    }

    /**calls commonSandbox doGetProfile with default param
     * after calls commonSandbox getWishlistCounts.
     *
     * */
    ngOnInit() {
        this.getLanguageList();
        this.subscribeLanguageList();
        this.imagePath = environment.imageUrl;
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('userToken')) {
                this.commonSandbox.doGetProfile();
                const params: any = {};
                params.limit = '';
                params.offset = 0;
                params.count = true;
                this.commonSandbox.getWishlistCounts(params);
            }
        }
    }

    /**first clear the local storage data.
     * calls commonSandbox doSignout,
     * Then navigate to authentication module
     * */
    signOut() {
        localStorage.clear();
        this.commonSandbox.doSignout();
        this.router.navigate(['/auth']);
    }

    // change the  language based on selection
    public changeLanguage(data) {
        if (isPlatformBrowser(this.platformId)) {
            this.language = localStorage.getItem('language');
        }
        this.language = data;
        if (this.language === 'Hindi') {
            localStorage.setItem('language', 'Hindi');
            this.translate.setDefaultLang('hi');
        } else if (this.language === 'English') {
            localStorage.setItem('language', 'english');
            this.translate.setDefaultLang('en');

        } else if (this.language === 'French') {
            localStorage.setItem('language', 'french');
            this.translate.setDefaultLang('fr');

        }
    }

    /**calls commonSandbox getLanguageList with default param
     * after calls commonSandbox getLanguageList.
     *
     * */
    getLanguageList() {
        const params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.count = '';
        this.commonSandbox.getLanguageList(params);
        this.listSandbox.getSettings();
    }

    /**calls listSandbox subscribeLanguageList with default data
     * subscribed data
     *
     * */
    subscribeLanguageList() {
        this.listSandbox.settingDetail$.subscribe(datas => {
            if (datas) {
                this.language = datas.storeLanguageName;
                localStorage.setItem('language', this.language);
                this.changeLanguage(this.language);
            }
        });
        this.commonSandbox.getLanguageList$.subscribe(data => {
            if (data) {
                data.forEach((item, index) => {
                    this.languageList.push(
                        {name: item.name, image: item.image, imagePath: item.imagePath},
                    );
                });
            }
        });
    }

}
