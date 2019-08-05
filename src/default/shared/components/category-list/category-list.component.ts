/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy} from '@angular/core';
import {ListsSandbox} from '../../../../core/lists/lists.sandbox';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements DoCheck, OnInit, OnDestroy {
    // decorator
    @Input() categories;
    @Input() categoryParentId;
    @Input() isClicked = [];
    @Output() change: EventEmitter<any> = new EventEmitter();
    // categories
    mainCategories;

    private subscriptions: Array<Subscription> = [];

    constructor(public listSandBox: ListsSandbox) {

    }

    ngOnInit() {
        this.subscribe();
    }

    // filter the  category parentId from categories  data
    public ngDoCheck() {
        if (this.categories && !this.mainCategories) {
            this.mainCategories = this.categories.filter(category => category.parentId === this.categoryParentId);
        }
    }


    // emit the category id
    public changeCategory(id, name) {
        this.isClicked = [];
        this.change.emit(id);
    }

    // subscribe Categorylist
    subscribe() {
        this.subscriptions.push(this.listSandBox.selectedCategoryList$.subscribe(categoryId => {
            if (categoryId) {
                this.isClicked = [];
                this.isClicked[categoryId] = categoryId;
            }
        }));
    }

    // OnDestroy Unsubscribe the old subscribed values
    ngOnDestroy() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }
}

