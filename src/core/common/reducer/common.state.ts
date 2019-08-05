/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Map, Record} from 'immutable';
import {ProfileModel} from '../models/profile.model';

export interface CommonState extends Map<string, any> {
    wishlistCount: number;
    profile: ProfileModel;
    languageList: any;

    wishlistCountLoading: boolean;
    wishlistCountLoaded: boolean;
    wishlistCountFailed: boolean;

    getProfileLoading: boolean;
    getProfileLoaded: boolean;
    getProfileFailed: boolean;

    getlanguageLoading: boolean;
    getlanguageLoaded: boolean;
    getlanguageFailed: boolean;

}

export const CommonRecord = Record({
    wishlistCount: 0,
    profile: {},
    languageList: {},

    wishlistCountLoading: false,
    wishlistCountLoaded: false,
    wishlistCountFailed: false,

    getProfileLoading: false,
    getProfileLoaded: false,
    getProfileFailed: false,

    getlanguageLoading: false,
    getlanguageLoaded: false,
    getlanguageFailed: false,


});
