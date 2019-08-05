/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {createSelector} from 'reselect';

import * as  fromAuth from './account.reducer';
import {AppState} from '../../state.interface';

export const getState = (State: AppState) => State.account;
export const getNewPassword = createSelector(getState, fromAuth.getNewPassword);
export const getOrderHistoryList = createSelector(getState, fromAuth.getorderHistoryList);
export const getorderHistoryCount = createSelector(getState, fromAuth.getorderHistoryCount);

export const getOrderHistoryDetail = createSelector(getState, fromAuth.getorderHistoryDetail);
export const getOrderHistoryDetailLoaded = createSelector(getState, fromAuth.getOrderHistoryDetailLoaded);
export const getOrderHistoryDetailLoading = createSelector(getState, fromAuth.getOrderHistoryDetailLoading);
export const getOrderHistoryDetailFailed = createSelector(getState, fromAuth.getOrderHistoryDetailFailed);

export const getHistoryListLoaded = createSelector(getState, fromAuth.getHistoryListLoaded);
export const getHistoryListLoading = createSelector(getState, fromAuth.getHistoryListLoading);
export const getHistoryListFailed = createSelector(getState, fromAuth.getHistoryListFailed);

export const getChangepasswordLoading = createSelector(getState, fromAuth.getChangepasswordLoading);
export const getChangepasswordLoaded = createSelector(getState, fromAuth.getChangepasswordLoaded);
export const getChangepasswordFailed = createSelector(getState, fromAuth.getChangepasswordFailed);

export const getEdittedStatus = createSelector(getState, fromAuth.getEdittedStatus);
export const getEditProfileLoading = createSelector(getState, fromAuth.getEditProfileLoading);
export const getEditProfileLoaded = createSelector(getState, fromAuth.getEditProfileLoaded);
export const getEditProfileFailed = createSelector(getState, fromAuth.getEditProfileFailed);

export const getAddressList = createSelector(getState, fromAuth.getCustomerAddressList);
export const getAddressListLoading = createSelector(getState, fromAuth.getCustomerAddressListLoading);
export const getAddressListLoaded = createSelector(getState, fromAuth.getCustomerAddressListLoaded);
export const getAddressListFailed = createSelector(getState, fromAuth.getCustomerAddressListFailed);

export const getAddAddress = createSelector(getState, fromAuth.addCustomerAddress);
export const getAddAddressLoading = createSelector(getState, fromAuth.addCustomerAddressLoading);
export const getAddAddressLoaded = createSelector(getState, fromAuth.addCustomerAddressLoaded);
export const getAddAddressFailed = createSelector(getState, fromAuth.addCustomerAddressFailed);

export const getUpdateAddress = createSelector(getState, fromAuth.updateCustomerAddress);
export const getUpdateAddressLoading = createSelector(getState, fromAuth.updateCustomerAddressLoading);
export const getUpdateAddressLoaded = createSelector(getState, fromAuth.updateCustomerAddressLoaded);
export const getUpdateAddressFailed = createSelector(getState, fromAuth.updateCustomerAddressFailed);

export const getDeleteAddress = createSelector(getState, fromAuth.deleteCustomerAddress);
export const getDeleteAddressLoading = createSelector(getState, fromAuth.deleteCustomerAddressLoading);
export const getDeleteAddressLoaded = createSelector(getState, fromAuth.deleteCustomerAddressLoaded);
export const getDeleteAddressFailed = createSelector(getState, fromAuth.deleteCustomerAddressFailed);

export const getReview = createSelector(getState, fromAuth.getReview);
export const getReviewLoading = createSelector(getState, fromAuth.getReviewLoading);
export const getReviewLoaded = createSelector(getState, fromAuth.getReviewLoaded);
export const getReviewFailed = createSelector(getState, fromAuth.getReviewFailed);

export const getRating = createSelector(getState, fromAuth.getRating);
export const getRatingLoading = createSelector(getState, fromAuth.getRatingLoading);
export const getRatingLoaded = createSelector(getState, fromAuth.getRatingLoaded);
export const getRatingFailed = createSelector(getState, fromAuth.getRatingFailed);



