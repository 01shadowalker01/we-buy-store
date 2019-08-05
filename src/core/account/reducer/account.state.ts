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
import {OrderHistoryResponseModel} from '../models/order-history-response.model';

export interface AccountState extends Map<string, any> {
    newPassword: any;
    orderHistory: Array<OrderHistoryResponseModel>;
    orderHistoryCount: number;
    orderHistoryDetail: any;
    orderHistoryDetailLoading: boolean;
    orderHistoryDetailLoaded: boolean;
    orderHistoryDetailFailed: boolean;

    historyListLoading: boolean;
    historyListLoaded: boolean;
    historyListFailed: boolean;

    changepasswordLoading: boolean;
    changepasswordLoaded: boolean;
    changepasswordFailed: boolean;

    edited: any;
    editProfileLoading: boolean;
    editProfileLoaded: boolean;
    editProfileFailed: boolean;

    addresslist: any;
    addresslistLoading: boolean;
    addresslistLoaded: boolean;
    addresslistFailed: boolean;

    addaddress: any;
    addaddressLoading: boolean;
    addaddressLoaded: boolean;
    addaddressFailed: boolean;

    updateCustomerAddress: any;
    updateCustomerAddressLoading: boolean;
    updateCustomerAddressLoaded: boolean;
    updateCustomerAddressFailed: boolean;

    deleteCustomerAddress: any;
    deleteCustomerAddressLoading: boolean;
    deleteCustomerAddressLoaded: boolean;
    deleteCustomerAddressFailed: boolean;

    review: any;
    reviewLoading: boolean;
    reviewLoaded: boolean;
    reviewFailed: boolean;

    rating: any;
    ratingLoading: boolean;
    ratingLoaded: boolean;
    ratingFailed: boolean;
}

export const accountrecord = Record({
        newPassword: {},
        orderHistory: [],
        orderHistoryCount: 0,
        orderHistoryDetail: {},
        addresslist: {},
        updateCustomerAddress: {},
        deleteCustomerAddress: {},

        orderHistoryDetailLoading: false,
        orderHistoryDetailLoaded: false,
        orderHistoryDetailFailed: false,

        historyListLoading: false,
        historyListLoaded: false,
        historyListFailed: false,

        changepasswordLoading: false,
        changepasswordLoaded: false,
        changepasswordFailed: false,

        editProfileLoading: false,
        editProfileLoaded: false,
        editProfileFailed: false,

        addresslistLoading: false,
        addresslistLoaded: false,
        addresslistFailed: false,

        updateCustomerAddressLoading: false,
        updateCustomerAddressLoaded: false,
        updateCustomerAddressFailed: false,

        deleteCustomerAddressLoading: false,
        deleteCustomerAddressLoaded: false,
        deleteCustomerAddressFailed: false,

        reviewLoading: false,
        reviewLoaded: false,
        reviewFailed: false,

        ratingLoading: false,
        ratingLoaded: false,
        ratingFailed: false,


    })
;
