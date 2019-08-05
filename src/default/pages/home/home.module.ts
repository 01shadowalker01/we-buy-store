/*
 * spurtcommerce
 * version 2.1
 * www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {ComponentsModule} from '../../shared/components/index';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

export const routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        ComponentsModule,
        TranslateModule.forChild()
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule {
}
