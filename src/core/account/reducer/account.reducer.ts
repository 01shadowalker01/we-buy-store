/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/account.action';
import {AccountState, accountrecord} from './account.state';
import {OrderHistoryResponseModel} from '../models/order-history-response.model';
import {AddresslistResponseModel} from '../models/addresslist-response.model';

export const initialState: AccountState = new accountrecord() as unknown as AccountState;


export function  reducer(state = initialState, {type, payload}: any): AccountState {

    if (!type) {

        return state;
    }
    switch (type) {
        case actions.ActionTypes.DO_CHANGE_PASSWORD:
        {
            return Object.assign({}, state, {
                changepasswordLoading: true,
                changepasswordLoaded: false,
                changepasswordFailed: false,
            });
        }

        case actions.ActionTypes.CHANGE_PASSWORD_SUCCESS: {

            return Object.assign({}, state, {
                newPassword: payload,
                changepasswordLoading: false,
                changepasswordLoaded: true,
                changepasswordFailed: false,
            });
        }
        case actions.ActionTypes.CHANGE_PASSWORD_FAIL:
        {
            return Object.assign({}, state, {
                changepasswordLoading: false,
                changepasswordLoaded: true,
                changepasswordFailed: true,
            });
        }

        case actions.ActionTypes.EDIT_PROFILE:
        {
            return Object.assign({}, state, {
                editProfileLoading: true,
                editProfileLoaded: false,
                editProfileFailed: false,
            });
        }

        case actions.ActionTypes.EDIT_PROFILE_SUCCESS: {
            return Object.assign({}, state, {
                edited: payload,
                editProfileLoading: false,
                editProfileLoaded: true,
                editProfileFailed: false,
            });
        }
        case actions.ActionTypes.EDIT_PROFILE_FAIL:
        {
            return Object.assign({}, state, {
                editProfileLoading: false,
                editProfileLoaded: true,
                editProfileFailed: true,
            });
        }
        case actions.ActionTypes.GET_ORDER_HISTORY:
        {

            return Object.assign({}, state, {
                historyListLoading: true,
                historyListLoaded: false,
                historyListFailed: false,
            });
        }

        case actions.ActionTypes.GET_ORDER_HISTORY_SUCCESS: {
            const tempHistory = payload.data.map(history => {
               const historyModel = new OrderHistoryResponseModel(history);
                return historyModel;
            });
            return Object.assign({}, state, {
                orderHistory: tempHistory,
                historyListLoading: false,
                historyListLoaded: true,
                historyListFailed: false,
            });
        }
        case actions.ActionTypes.GET_ORDER_HISTORY_SUCCESS_COUNT: {
            return Object.assign({}, state, {
                orderHistoryCount: payload.data,
                historyListLoading: false,
                historyListLoaded: true,
                historyListFailed: false,
            });
        }
        case actions.ActionTypes.GET_ORDER_HISTORY_FAIL:
        {
            return Object.assign({}, state, {
                historyListLoading: false,
                historyListLoaded: true,
                historyListFailed: true,
            });
        }
        case actions.ActionTypes.GET_ORDER_DETAIL:
        {

            return Object.assign({}, state, {
                orderHistoryDetail: {},
                orderHistoryDetailLoading: true,
                orderHistoryDetailLoaded: false,
                orderHistoryDetailFailed: false,
            });
        }
        case actions.ActionTypes.CLEAR_ORDER_DETAIL:
        {

            return Object.assign({}, state, {
                orderHistoryDetail: {},
            });
        }

        case actions.ActionTypes.GET_ORDER_DETAIL_SUCCESS: {
            return Object.assign({}, state, {
                orderHistoryDetail: payload.data[0],
                orderHistoryDetailLoading: false,
                orderHistoryDetailLoaded: true,
                orderHistoryDetailFailed: false,
            });
        }
        case actions.ActionTypes.GET_ORDER_DETAIL_FAIL:
        {
            return Object.assign({}, state, {
                orderHistoryDetail: {},
                orderHistoryDetailLoading: false,
                orderHistoryDetailLoaded: true,
                orderHistoryDetailFailed: true,
            });
        }
        case actions.ActionTypes.GET_CUSTOMER_ADDRESSLIST:
        {

            return Object.assign({}, state, {
                addresslistLoading: true,
                addresslistLoaded: false,
                addresslistFailed: false,
            });
        }

        case actions.ActionTypes.GET_CUSTOMER_ADDRESSLIST_SUCCESS: {
            const tempaddressModel = payload.data.map(address => {
                const addressModel = new AddresslistResponseModel(address);
                return addressModel;
            });
            return Object.assign({}, state, {
                addresslist: tempaddressModel,
                addresslistLoading: false,
                addresslistLoaded: true,
                addresslistFailed: false,
            });
        }
        case actions.ActionTypes.GET_CUSTOMER_ADDRESSLIST_FAIL:
        {
            return Object.assign({}, state, {
                addresslist: {},
                addresslistLoading: false,
                addresslistLoaded: true,
                addresslistFailed: true,
            });
        }


        case actions.ActionTypes.ADD_CUSTOMER_ADDRESS:
        {

            return Object.assign({}, state, {
                addaddressLoading: true,
                addaddressLoaded: false,
                addaddressFailed: false,
            });
        }

        case actions.ActionTypes.ADD_CUSTOMER_ADDRESS_SUCCESS: {
            return Object.assign({}, state, {
                addaddress: payload,
                addaddressLoading: false,
                addaddressLoaded: true,
                addaddressFailed: false,
            });
        }
        case actions.ActionTypes.ADD_CUSTOMER_ADDRESS_FAIL:
        {
            return Object.assign({}, state, {
                addaddress: payload,
                addaddressLoading: false,
                addaddressLoaded: true,
                addaddressFailed: true,
            });
        }

        case actions.ActionTypes.UPDATE_CUSTOMER_ADDRESS:
        {

            return Object.assign({}, state, {
                updateCustomerAddressLoading: true,
                updateCustomerAddressLoaded: false,
                updateCustomerAddressFailed: false,
            });
        }

        case actions.ActionTypes.UPDATE_CUSTOMER_ADDRESS_SUCCESS: {
            return Object.assign({}, state, {
                updateCustomerAddress: payload,
                updateCustomerAddressLoading: false,
                updateCustomerAddressLoaded: true,
                updateCustomerAddressFailed: false,
            });
        }
        case actions.ActionTypes.UPDATE_CUSTOMER_ADDRESS_FAIL:
        {
            return Object.assign({}, state, {
                updateCustomerAddress: {},
                updateCustomerAddressLoading: false,
                updateCustomerAddressLoaded: true,
                updateCustomerAddressFailed: true,
            });
        }

        case actions.ActionTypes.DELETE_CUSTOMER_ADDRESS:
        {

            return Object.assign({}, state, {
                deleteCustomerAddressLoading: true,
                deleteCustomerAddressLoaded: false,
                deleteCustomerAddressFailed: false,
            });
        }

        case actions.ActionTypes.DELETE_CUSTOMER_ADDRESS_SUCCESS: {
            return Object.assign({}, state, {
                deleteCustomerAddress: payload,
                deleteCustomerAddressLoading: false,
                deleteCustomerAddressLoaded: true,
                deleteCustomerAddressFailed: false,
            });
        }
        case actions.ActionTypes.DELETE_CUSTOMER_ADDRESS_FAIL:
        {
            return Object.assign({}, state, {
                deleteCustomerAddress: {},
                deleteCustomerAddressLoading: false,
                deleteCustomerAddressLoaded: true,
                deleteCustomerAddressFailed: true,
            });
        }
        // add review
        case actions.ActionTypes.GET_REVIEW_DETAIL:
        {
            return Object.assign({}, state, {
                reviewLoading: true,
                reviewLoaded: false,
                reviewFailed: false,
            });
        }

        case actions.ActionTypes.GET_REVIEW_DETAIL_SUCCESS: {

            return Object.assign({}, state, {
                review: payload,
                reviewLoading: false,
                reviewLoaded: true,
                reviewFailed: false,
            });
        }
        case actions.ActionTypes.GET_REVIEW_DETAIL_FAIL:
        {
            return Object.assign({}, state, {
                reviewLoading: false,
                reviewLoaded: false,
                reviewFailed: true,
            });
        }
        // add rating
        case actions.ActionTypes.GET_RATING_DETAIL:
        {
            return Object.assign({}, state, {
                ratingLoading: true,
                ratingLoaded: false,
                ratingFailed: false,
            });
        }

        case actions.ActionTypes.GET_RATING_DETAIL_SUCCESS: {

            return Object.assign({}, state, {
                rating: payload,
                ratingLoading: false,
                ratingLoaded: true,
                ratingFailed: false,
            });
        }
        case actions.ActionTypes.CHANGE_PASSWORD_FAIL:
        {
            return Object.assign({}, state, {
                ratingLoading: false,
                ratingLoaded: false,
                ratingFailed: true,
            });
        }
        default: {
            return state;
        }
    }
}

export const getNewPassword = (state: AccountState) => state.newPassword;
export const getorderHistoryList = (state: AccountState) => state.orderHistory;
export const getorderHistoryCount = (state: AccountState) => state.orderHistoryCount;

export const getorderHistoryDetail = (state: AccountState) => state.orderHistoryDetail;
export const getOrderHistoryDetailLoading = (state: AccountState) => state.orderHistoryDetailLoading;
export const getOrderHistoryDetailLoaded = (state: AccountState) => state.orderHistoryDetailLoaded;
export const getOrderHistoryDetailFailed = (state: AccountState) => state.orderHistoryDetailFailed;

export const getHistoryListLoading = (state: AccountState) => state.historyListLoading;
export const getHistoryListLoaded = (state: AccountState) => state.historyListLoaded;
export const getHistoryListFailed = (state: AccountState) => state.historyListFailed;

export const getChangepasswordLoading = (state: AccountState) => state.changepasswordLoading;
export const getChangepasswordLoaded = (state: AccountState) => state.changepasswordLoaded;
export const getChangepasswordFailed = (state: AccountState) => state.changepasswordFailed;

export const getEdittedStatus = (state: AccountState) => state.edited;
export const getEditProfileLoading = (state: AccountState) => state.editProfileLoading;
export const getEditProfileLoaded = (state: AccountState) => state.editProfileLoaded;
export const getEditProfileFailed = (state: AccountState) => state.editProfileFailed;

export const getCustomerAddressList = (state: AccountState) => state.addresslist;
export const getCustomerAddressListLoading = (state: AccountState) => state.addresslistLoading;
export const getCustomerAddressListLoaded = (state: AccountState) => state.addresslistLoaded;
export const getCustomerAddressListFailed = (state: AccountState) => state.addresslistFailed;

export const addCustomerAddress = (state: AccountState) => state.addaddress;
export const addCustomerAddressLoading = (state: AccountState) => state.addaddressLoading;
export const addCustomerAddressLoaded = (state: AccountState) => state.addaddressLoaded;
export const addCustomerAddressFailed = (state: AccountState) => state.addaddressFailed;

export const updateCustomerAddress = (state: AccountState) => state.updateCustomerAddress;
export const updateCustomerAddressLoading = (state: AccountState) => state.updateCustomerAddressLoading;
export const updateCustomerAddressLoaded = (state: AccountState) => state.updateCustomerAddressLoaded;
export const updateCustomerAddressFailed = (state: AccountState) => state.updateCustomerAddressFailed;

export const deleteCustomerAddress = (state: AccountState) => state.deleteCustomerAddress;
export const deleteCustomerAddressLoading = (state: AccountState) => state.deleteCustomerAddressLoading;
export const deleteCustomerAddressLoaded = (state: AccountState) => state.deleteCustomerAddressLoaded;
export const deleteCustomerAddressFailed = (state: AccountState) => state.deleteCustomerAddressFailed;

export const getReview = (state: AccountState) => state.review;
export const getReviewLoading = (state: AccountState) => state.reviewLoading;
export const getReviewLoaded = (state: AccountState) => state.reviewLoaded;
export const getReviewFailed = (state: AccountState) => state.reviewFailed;

export const getRating = (state: AccountState) => state.rating;
export const getRatingLoading = (state: AccountState) => state.ratingLoading;
export const getRatingLoaded = (state: AccountState) => state.ratingLoaded;
export const getRatingFailed = (state: AccountState) => state.ratingFailed;


