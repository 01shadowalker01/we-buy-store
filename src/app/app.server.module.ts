/*
* spurtcommerce
* version 2.2
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/
import { DefaultComponent } from './../default/default.component';
import { DefaultModule } from './../default/default.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';


@NgModule({
  imports: [
    DefaultModule,
    ServerModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule
  ],
  bootstrap: [DefaultComponent],
})
export class AppServerModule {}
