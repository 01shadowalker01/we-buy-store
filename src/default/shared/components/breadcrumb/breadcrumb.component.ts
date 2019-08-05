/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
    // decorator
    @Input() layout;
    // page title
    pageInfo;

    constructor(public router: Router,
                public activatedRoute: ActivatedRoute,
                public title: Title) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(
                map(route => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                })
            )
            .pipe(filter(route => route.outlet === 'primary'))
            .pipe(mergeMap(route => route.data))
            .subscribe(event => {
                // this.title.setTitle(event['title']);
                this.pageInfo = event;
            });
    }

}
