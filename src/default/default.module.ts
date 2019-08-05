/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {OverlayContainer, Overlay} from '@angular/cdk/overlay';
import {MAT_MENU_SCROLL_STRATEGY} from '@angular/material';
import {CustomOverlayContainer} from './theme/utils/custom-overlay-container';
import {menuScrollStrategy} from './theme/utils/scroll-strategy';
import {AppSettings} from './app.settings';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ConfigService} from '../core/service/config.service';
import {RequestInterceptor} from '../core/service/request.interceptor';
import {AuthGuard} from '../core/service/auth.guard';

// modules
import {ComponentsModule} from './shared/components/index';
import {DefaultRoutingModule} from './default.routing';
import {SharedModule} from './shared/shared.module';

// components
import {CONTAINERS} from './common/index';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {DefaultComponent} from './default.component';

// store actions
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from '../core/reducer.interface';
import {ListsEffect} from '../core/lists/effects/lists.effect';
import {ListsSandbox} from '../core/lists/lists.sandbox';
import {ListsService} from '../core/lists/lists.service';
// component
import {DetailPageComponent} from './pages/detail-page/detail-page.component';
import {LayoutAuthGuard} from '../core/service/layout_auth.guard';
import {UnderDevelopingComponent} from './pages/layout/under-developing/under-developing.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'spurtStore'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxSpinnerModule,
        SharedModule,
        ComponentsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        EffectsModule.forRoot([ListsEffect]),
        StoreModule.forRoot(reducers, {metaReducers}),
        DefaultRoutingModule
    ],
    declarations: [
        DefaultComponent,
        NotFoundComponent,
        DetailPageComponent,
        CONTAINERS.LayoutContainerComponent,
        UnderDevelopingComponent
    ],
    providers: [
        AppSettings,
        LayoutAuthGuard,
        AuthGuard,
        ConfigService,
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: (config: ConfigService) => () => config.load(),
        //     deps: [ConfigService],
        //     multi: true
        // },
        {provide: OverlayContainer, useClass: CustomOverlayContainer},
        {provide: MAT_MENU_SCROLL_STRATEGY, useFactory: menuScrollStrategy, deps: [Overlay]},
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        ListsSandbox,
        ListsService
    ],
    bootstrap: [DefaultComponent]
})
export class DefaultModule {
}
