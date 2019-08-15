/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { AfterViewInit } from '@angular/core';
// component and decorator
import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
// sandbox
import {CommonSandbox} from '../../../core/common/common.sandbox';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit , AfterViewInit {
    @ViewChild('sidenav') sidenav: any;
    public sidenavOpen = true;
    public links = [
        {name: 'داشبورد', href: 'dashboard', icon: 'dashboard'},
        {name: 'اطلاعات حساب', href: 'information', icon: 'info'},
        {name: 'آدرس ها', href: 'addresses', icon: 'location_on'},
        {name: 'لیست سفارش ها', href: 'orders', icon: 'add_shopping_cart'},
        {name: 'خروج', href: '/auth', icon: 'power_settings_new' },
    ];

    constructor(public router: Router,
                public commonSandbox: CommonSandbox) {
    }

    ngOnInit() {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
    }
    // calls commonSandbox doSignout function for doing logout
    doLogOut(name) {
        if (name === 'Logout') {
            localStorage.clear();
            this.commonSandbox.doSignout();
        }
    }
    @HostListener('window:resize')
    public onWindowResize(): void {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    // subscribe the event  at finally
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (window.innerWidth < 960) {
                    this.sidenav.close();
                }
            }
        });
    }

}

