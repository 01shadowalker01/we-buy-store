/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Component} from '@angular/core';
import {Settings, AppSettings} from '../../../app.settings';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
    // colors
    public showOptions = false;
    public settings: Settings;

    constructor(public appSettings: AppSettings) {
        this.settings = this.appSettings.settings;
    }
            // change the color theme of the page
    public changeTheme(theme) {
        this.settings.theme = theme;
    }
}
