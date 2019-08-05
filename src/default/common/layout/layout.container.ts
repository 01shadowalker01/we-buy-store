/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Settings, AppSettings} from '../../app.settings';
import {ListsSandbox} from '../../../core/lists/lists.sandbox';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.container.html',
    styleUrls: ['./layout.container.scss'],
})
export class LayoutContainerComponent implements OnInit {
    // go back event
    public showBackToTop = false;

    // AppSettings
    public settings: Settings;
    private subscriptions: Array<Subscription> = [];

    constructor(public appSettings: AppSettings,
                public router: Router, public listSandBox: ListsSandbox) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getCategories();
        this.getSettings();

    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    }

    /**
     * fetch cahegory list from the ListsSandbox. Calls sandbox getCategoryList.
     *
     * @param limit number of records should load
     * @param offset start key for the record
     * @param keyword keyword search from the category list
     * @param sortOrder filter based on sort order
     */
    public getCategories() {
        const params: any = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        this.listSandBox.getCategoryList(params);
    }

    // scroll the window to the top
    public scrollToTop() {
        const scrollDuration = 200;
        const scrollStep = -window.pageYOffset / (scrollDuration / 20);
        const scrollInterval = setInterval(() => {
            if (window.pageYOffset !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            });
        }
    }


    // getSetting

    /**
     * fetch getSetting  from the ListsSandbox. Calls sandbox getSetting.
     * after subscribe the getSetting info
     */
    getSettings() {
        this.listSandBox.getSettings();
        this.subscriptions.push(this.listSandBox.settingDetail$.subscribe(data => {
            if (data && data.maintenanceMode === 1) {
                sessionStorage.setItem('maintenanceMode', 'true');
                this.router.navigate(['/underdeveloping']);
            } else {
                sessionStorage.setItem('maintenanceMode', 'false');
            }
        }));
    }
}
