/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

// components
import {MainCarouselComponent} from './main-carousel/main-carousel.component';
import {BrandsCarouselComponent} from './brands-carousel/brands-carousel.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {FooterComponent} from './footer/footer.component';
import {OptionsComponent} from './options/options.component';
import {MenuComponent} from './menu/menu.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {HeaderComponent} from './header/header.component';
import {HeaderMenuComponent} from './header-menu/header-menu.component';
import {ControlsComponent} from './controls/controls.component';
import {ProductsCarouselComponent} from './products-carousel/products-carousel.component';
import {ProductDialogComponent} from './products-carousel/product-dialog/product-dialog.component';
import {CartNavComponent} from './cart/cart.component';
import {ControlsProductDetailComponent} from './controls-product-detail/controls-product-detail.component';

// modules
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {SharedModule} from '../shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// store
import {EffectsModule} from '@ngrx/effects';
import {ProductControlEffect} from '../../../core/product-control/effects/product-control.effect';
import {CommonEffect} from '../../../core/common/effects/common.effect';
import {ProductControlService} from '../../../core/product-control/product-control.service';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {CommonSandbox} from '../../../core/common/common.sandbox';
import {CommonService} from '../../../core/common/common.service';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

export const COMPONENTS = [
    MainCarouselComponent,
    BrandsCarouselComponent,
    CategoryListComponent,
    BreadcrumbComponent,
    TopMenuComponent,
    MenuComponent,
    OptionsComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    ControlsComponent,
    ProductsCarouselComponent,
    ProductDialogComponent,
    ControlsProductDetailComponent,
    CartNavComponent
];

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PerfectScrollbarModule,
        SharedModule,
        EffectsModule.forFeature([ProductControlEffect, CommonEffect]),
        TranslateModule.forChild(),
        NgbModule
    ],
    declarations: [COMPONENTS],

    exports: [COMPONENTS],
    entryComponents: [
        ProductDialogComponent
    ],
    providers: [
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        ProductControlService , ProductControlSandbox, CommonSandbox, CommonService
    ]
})
export class ComponentsModule {
}
