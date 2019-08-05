/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Action} from '@ngrx/store';
import {type} from '../../shared/utility/utilityHelpers';

export const ActionTypes = {
    GET_PROFILE: type('[login] get profile'),
    GET_PROFILE_SUCCESS: type('[login] get profile success'),
    GET_PROFILE_FAIL: type('[login] get profile fail'),

    GET_WISHLIST_COUNT: type('[count] get wishlist count'),
    GET_WISHLIST_COUNT_SUCCESS: type('[count] wishlist count success'),
    GET_WISHLIST_COUNT_FAIL: type('[count] wishlist count fail'),
    DO_SIGN_OUT: type('[signout] sign out'),

    GET_LANGUAGELIST: type('[language] get language'),
    GET_LANGUAGELIST_SUCCESS: type('[language] get language success'),
    GET_LANGUAGELIST_FAIL: type('[language] get language fail'),

};

/* get wishlist count action*/
export class GetWishlistCount implements Action {
    type = ActionTypes.GET_WISHLIST_COUNT;

    constructor(public payload: any) {
    }
}
/* get Wishlist action*/
export class GetWishlistCountSuccess implements Action {
    type = ActionTypes.GET_WISHLIST_COUNT_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetWishlistCountFail implements Action {
    type = ActionTypes.GET_WISHLIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

/* get profile action*/

export class GetProfile implements Action {
    type = ActionTypes.GET_PROFILE;

    constructor(public payload = null) {
    }
}

export class GetProfileSuccess implements Action {
    type = ActionTypes.GET_PROFILE_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetProfileFail implements Action {
    type = ActionTypes.GET_PROFILE_FAIL;

    constructor(public payload: any) {
    }
}

/* do sign out action*/

export class DoSignOut implements Action {
    type = ActionTypes.DO_SIGN_OUT;

    constructor(public payload: any = null) {
    }
}

/* get language action*/

export class GetLanguage implements Action {
    type = ActionTypes.GET_LANGUAGELIST;

    constructor(public payload: any) {
    }
}

export class GetLanguageSuccess implements Action {
    type = ActionTypes.GET_LANGUAGELIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetLanguageFail implements Action {
    type = ActionTypes.GET_LANGUAGELIST_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions
    = GetWishlistCount |
    GetWishlistCountSuccess |
    GetWishlistCountFail |
    GetProfile |
    GetProfileSuccess |
    GetProfileFail |
    DoSignOut |
    GetLanguage |
    GetLanguageSuccess |
    GetLanguageFail  ;
