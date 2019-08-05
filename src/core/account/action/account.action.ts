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
import {ChangePasswordModel} from '../models/changePassword.model';
import {EditProfileModal} from '../models/editProfile.modal';
import {OrderHistoryRequestModel} from '../models/order-history-request.model';
import {AddresslistModel} from '../models/addresslist.model';
import {AddressModel} from '../models/address.model';


export const ActionTypes = {
    // change password actions
    DO_CHANGE_PASSWORD: type('[login] do change password'),
    CHANGE_PASSWORD_SUCCESS: type('[login] do change password success'),
    CHANGE_PASSWORD_FAIL: type('[login] do  change password fail'),

    // Edit profile actions
    EDIT_PROFILE: type('[login] edit profile'),
    EDIT_PROFILE_SUCCESS: type('[login] edit profile success'),
    EDIT_PROFILE_FAIL: type('[login] edit profile fail'),

    // get order history actions
    GET_ORDER_HISTORY: type('[history] edit profile'),
    GET_ORDER_HISTORY_SUCCESS: type('[history] edit profile success'),
    GET_ORDER_HISTORY_FAIL: type('[history] edit profile fail'),

    // get order history count actions
    GET_ORDER_HISTORY_COUNT: type('[history] history count'),
    GET_ORDER_HISTORY_SUCCESS_COUNT: type('[history] history count success'),
    GET_ORDER_HISTORY_COUNT_FAIL: type('[history] history count fail'),

    // get order detail actions
    GET_ORDER_DETAIL: type('[order_detail] order detail'),
    CLEAR_ORDER_DETAIL: type('[order_detail] clear order detail'),
    GET_ORDER_DETAIL_SUCCESS: type('[order_detail] order detail success'),
    GET_ORDER_DETAIL_FAIL: type('[order_detail] order detail fail'),

    // get customer address list
    GET_CUSTOMER_ADDRESSLIST: type('[address] address list'),
    GET_CUSTOMER_ADDRESSLIST_SUCCESS: type('[address] address list success'),
    GET_CUSTOMER_ADDRESSLIST_FAIL: type('[address] address list fail'),

    // Add customer address
    ADD_CUSTOMER_ADDRESS: type('[add address] add address '),
    ADD_CUSTOMER_ADDRESS_SUCCESS: type('[add address] add address success'),
    ADD_CUSTOMER_ADDRESS_FAIL: type('[add address] add address  fail'),

    // Update customer address
    UPDATE_CUSTOMER_ADDRESS: type('[update address] add address '),
    UPDATE_CUSTOMER_ADDRESS_SUCCESS: type('[update address] add address success'),
    UPDATE_CUSTOMER_ADDRESS_FAIL: type('[update address] add address  fail'),

    // Delete customer address
    DELETE_CUSTOMER_ADDRESS: type('[delete address] delete address '),
    DELETE_CUSTOMER_ADDRESS_SUCCESS: type('[delete address] delete address success'),
    DELETE_CUSTOMER_ADDRESS_FAIL: type('[delete address] delete address  fail'),
    // get review
    GET_RATING_DETAIL: type('[RATING_DETAIL] rating detail'),
    GET_RATING_DETAIL_SUCCESS: type('[RATING_DETAIL] rating detail success'),
    GET_RATING_DETAIL_FAIL: type('[RATING_DETAIL] rating detail fail'),
    // get rating
    GET_REVIEW_DETAIL: type('[REVIEW_DETAIL] review detail'),
    GET_REVIEW_DETAIL_SUCCESS: type('[REVIEW_DETAIL] review detail success'),
    GET_REVIEW_DETAIL_FAIL: type('[REVIEW_DETAIL] review detail fail'),
};

/*  Change Password Actions */
export class ChangePassword implements Action {
    type = ActionTypes.DO_CHANGE_PASSWORD;

    constructor(public payload: ChangePasswordModel) {
    }
}

/*  Change Password success Actions */

export class ChangePasswordSuccess implements Action {
    type = ActionTypes.CHANGE_PASSWORD_SUCCESS;

    constructor(public payload: any) {
    }
}

/*  Change Password fail Actions */

export class ChangePasswordFail implements Action {
    type = ActionTypes.CHANGE_PASSWORD_FAIL;

    constructor(public payload: any) {
    }
}


/*  Edit Profile Actions */

export class EditProfile implements Action {
    type = ActionTypes.EDIT_PROFILE;

    constructor(public payload: EditProfileModal) {
    }
}

/*  Edit Profile success Actions */

export class EditProfileSuccess implements Action {
    type = ActionTypes.EDIT_PROFILE_SUCCESS;

    constructor(public payload: any) {
    }
}

/*  Edit Profile fail Actions */

export class EditProfileFail implements Action {
    type = ActionTypes.EDIT_PROFILE_FAIL;

    constructor(public payload: any) {
    }
}

/* Get Order History  Actions */

export class GetOrderHistory implements Action {
    type = ActionTypes.GET_ORDER_HISTORY;

    constructor(public payload: OrderHistoryRequestModel) {
    }
}

/* Get Order History success Actions */

export class GetOrderHistorySuccess implements Action {
    type = ActionTypes.GET_ORDER_HISTORY_SUCCESS;

    constructor(public payload: any) {
    }
}

/* Get Order History fail Actions */

export class GetOrderHistoryFail implements Action {
    type = ActionTypes.GET_ORDER_HISTORY_FAIL;

    constructor(public payload: any) {
    }
}

/* Get Order History count Actions */

export class GetOrderHistoryCount implements Action {
    type = ActionTypes.GET_ORDER_HISTORY_COUNT;

    constructor(public payload: OrderHistoryRequestModel) {
    }
}

/* Get Order History count success Actions */

export class GetOrderHistoryCountSuccess implements Action {
    type = ActionTypes.GET_ORDER_HISTORY_SUCCESS_COUNT;

    constructor(public payload: any) {
    }
}

/* Get Order History count fail Actions */

export class GetOrderHistoryCountFail implements Action {
    type = ActionTypes.GET_ORDER_HISTORY_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

/* Get Order detail Actions */

export class GetOrderDetail implements Action {
    type = ActionTypes.GET_ORDER_DETAIL;

    constructor(public payload: any) {
    }
}

/* Clear Order detail Actions */

export class ClearOrderDetail implements Action {
    type = ActionTypes.CLEAR_ORDER_DETAIL;

    constructor(public payload: any = null) {
    }
}

/* Get Order detail success Actions */

export class GetOrderDetailSuccess implements Action {
    type = ActionTypes.GET_ORDER_DETAIL_SUCCESS;

    constructor(public payload: any) {
    }
}

/* Get Order detail fail Actions */

export class GetOrderDetailFail implements Action {
    type = ActionTypes.GET_ORDER_DETAIL_FAIL;

    constructor(public payload: any) {
    }
}

/* Get CustomerAddress List Actions */
export class GetCustomerAddressList implements Action {
    type = ActionTypes.GET_CUSTOMER_ADDRESSLIST;

    constructor(public payload: AddresslistModel) {
    }
}

/* Get CustomerAddress List success Actions */

export class GetCustomerAddressListSuccess implements Action {
    type = ActionTypes.GET_CUSTOMER_ADDRESSLIST_SUCCESS;

    constructor(public payload: any) {
    }
}

/* Get CustomerAddress List fail Actions */

export class GetCustomerAddressListFail implements Action {
    type = ActionTypes.GET_CUSTOMER_ADDRESSLIST_FAIL;

    constructor(public payload: any) {
    }
}

/* Add CustomerAddress  Actions */
export class AddCustomerAddress implements Action {
    type = ActionTypes.ADD_CUSTOMER_ADDRESS;

    constructor(public payload: any) {
    }
}

/* Add CustomerAddress  success Actions */

export class AddCustomerAddressSuccess implements Action {
    type = ActionTypes.ADD_CUSTOMER_ADDRESS_SUCCESS;

    constructor(public payload: any) {
    }
}

/* Add CustomerAddress  fail Actions */

export class AddCustomerAddressFail implements Action {
    type = ActionTypes.ADD_CUSTOMER_ADDRESS_FAIL;

    constructor(public payload: any) {
    }
}


/* Update CustomerAddress  Actions */
export class UpdateCustomerAddress implements Action {
    type = ActionTypes.UPDATE_CUSTOMER_ADDRESS;

    constructor(public payload: AddressModel) {
    }
}

/* Update CustomerAddress  success Actions */

export class UpdateCustomerAddressSuccess implements Action {
    type = ActionTypes.UPDATE_CUSTOMER_ADDRESS_SUCCESS;

    constructor(public payload: any) {
    }
}

/* Update CustomerAddress  fail Actions */

export class UpdateCustomerAddressFail implements Action {
    type = ActionTypes.UPDATE_CUSTOMER_ADDRESS_FAIL;

    constructor(public payload: any) {
    }
}


/* Delete CustomerAddress  Actions */
export class DeleteCustomerAddress implements Action {
    type = ActionTypes.DELETE_CUSTOMER_ADDRESS;

    constructor(public payload: any = null) {
    }
}

/* Delete CustomerAddress  success Actions */

export class DeleteCustomerAddressSuccess implements Action {
    type = ActionTypes.DELETE_CUSTOMER_ADDRESS_SUCCESS;

    constructor(public payload: any) {
    }
}

/* Delete CustomerAddress  fail Actions */

export class DeleteCustomerAddressFail implements Action {
    type = ActionTypes.DELETE_CUSTOMER_ADDRESS_FAIL;

    constructor(public payload: any) {
    }
}

// add rating
export class RatingDetail implements Action {
    type = ActionTypes.GET_RATING_DETAIL;

    constructor(public payload: any) {
    }
}


export class RatingDetailSuccess implements Action {
    type = ActionTypes.GET_RATING_DETAIL_SUCCESS;

    constructor(public payload: any) {
    }
}


export class RatingDetailFail implements Action {
    type = ActionTypes.GET_RATING_DETAIL_FAIL;

    constructor(public payload: any) {
    }
}

// add review
export class ReviewDetail implements Action {
    type = ActionTypes.GET_REVIEW_DETAIL;

    constructor(public payload: any) {
    }
}


export class ReviewDetailSuccess implements Action {
    type = ActionTypes.GET_REVIEW_DETAIL_SUCCESS;

    constructor(public payload: any) {
    }
}


export class ReviewDetailFail implements Action {
    type = ActionTypes.GET_REVIEW_DETAIL_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions
    = ChangePassword |
    ChangePasswordSuccess |
    ChangePasswordFail |
    EditProfile |
    EditProfileSuccess |
    EditProfileFail |
    GetOrderHistory |
    GetOrderHistorySuccess |
    GetOrderHistoryFail |
    GetOrderDetail |
    GetOrderDetailSuccess |
    GetOrderDetailFail |
    ClearOrderDetail |
    GetOrderHistoryCount |
    GetOrderHistoryCountSuccess |
    GetOrderHistoryCountFail |
    GetCustomerAddressList |
    GetCustomerAddressListSuccess |
    GetCustomerAddressListFail |
    AddCustomerAddress |
    AddCustomerAddressSuccess |
    AddCustomerAddressFail |
    UpdateCustomerAddress |
    UpdateCustomerAddressSuccess |
    UpdateCustomerAddressFail |
    DeleteCustomerAddress |
    DeleteCustomerAddressSuccess |
    RatingDetail |
    RatingDetail |
    RatingDetailSuccess |
    RatingDetailFail |
    ReviewDetail |
    ReviewDetailSuccess |
    ReviewDetailFail;

