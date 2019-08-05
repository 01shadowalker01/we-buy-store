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
import {CheckoutModel} from '../models/checkout.model';

export const ActionTypes = {
    ADD_TO_WISHLIST: type('[wishlist] add to wishlist'),
    ADD_TO_WISHLIST_SUCCESS: type('[wishlist] add to wishlist success'),
    ADD_TO_WISHLIST_FAIL: type('[wishlist] add to wishlist fail'),
    CART_HANDLE_ACTION: type('[cart] cart handle'),
    DO_CHECKOUT: type('[checkout] do checkout '),
    DO_CHECKOUT_SUCCESS: type('[checkout] do checkout success'),
    DO_SELECTED_OPTIONS: type('[checkout] do selected options '),
    DO_SELECTED_OPTIONS_SUCCESS: type('[checkout] do selected options success'),
    DO_CHECKOUT_FAIL: type('[checkout] do checkout fail'),
    DO_AVAILABLE_OPTIONS: type('[checkout] do available options '),
    DO_AVAILABLE_OPTIONS_SUCCESS: type('[checkout] do available options success '),
};
/* add to wishlist action*/

export class AddtoWishlist implements Action {
    type = ActionTypes.ADD_TO_WISHLIST;

    constructor(public payload: any) {
    }
}

export class AddtoWishlistSuccess implements Action {
    type = ActionTypes.ADD_TO_WISHLIST_SUCCESS;

    constructor(public payload: any) {
    }
}
export class AddtoWishlistFail implements Action {
    type = ActionTypes.ADD_TO_WISHLIST_FAIL;

    constructor(public payload: any) {
    }
}
/* cart handle action*/

export class CartHandleAction implements Action {
    type = ActionTypes.CART_HANDLE_ACTION;

    constructor(public payload: any) {
    }
}
/*available options */
export class AavailableOptionsAction implements Action {
    type = ActionTypes.DO_AVAILABLE_OPTIONS;

    constructor(public payload: any) {
    }
}
export class AavailableOptionsSuccessAction implements Action {
    type = ActionTypes.DO_AVAILABLE_OPTIONS_SUCCESS;

    constructor(public payload: any) {
    }
}
/*selected options */
export class SelectedOptionsAction implements Action {
    type = ActionTypes.DO_SELECTED_OPTIONS;

    constructor(public payload: any) {
    }
}
export class SelectedOptionsSuccessAction implements Action {
    type = ActionTypes.DO_SELECTED_OPTIONS_SUCCESS;

    constructor(public payload: any) {
    }
}
/* product checkout action*/

export class DoCheckoutAction implements Action {
    type = ActionTypes.DO_CHECKOUT;

    constructor(public payload: CheckoutModel) {
    }
}
export class CheckoutActionSuccess implements Action {
    type = ActionTypes.DO_CHECKOUT_SUCCESS;

    constructor(public payload: any) {
    }
}
export class CheckoutActionFail implements Action {
    type = ActionTypes.DO_CHECKOUT_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions
    = AddtoWishlist|
    AddtoWishlistSuccess|
    AddtoWishlistFail|
    SelectedOptionsAction|
    SelectedOptionsSuccessAction|
    CartHandleAction|
    DoCheckoutAction|
    CheckoutActionSuccess|
    CheckoutActionFail;
