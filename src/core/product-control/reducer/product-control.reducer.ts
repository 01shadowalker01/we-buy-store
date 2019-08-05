/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/product-control.action';
import {productControlRecord, ProductControlState} from './product-control.state';
import * as cloneDeep from 'lodash/cloneDeep';

export const initialState: ProductControlState = new productControlRecord() as unknown as ProductControlState;


export function reducer(state = initialState, {type, payload}: any): ProductControlState {
    if (!type) {
        return state;
    }
    switch (type) {
        case actions.ActionTypes.ADD_TO_WISHLIST: {

            return Object.assign({}, state, {
                checkedOut: {}
            });
        }

        case actions.ActionTypes.ADD_TO_WISHLIST_SUCCESS: {

            return Object.assign({}, state, {
                checkedOut: {}
            });
        }
        case actions.ActionTypes.ADD_TO_WISHLIST_FAIL: {
            return Object.assign({}, state, {
                checkedOut: {}

            });
        }
        case actions.ActionTypes.CART_HANDLE_ACTION: {
            let tempArray: any = [];
            const clonedPayload = cloneDeep(payload.products);

            /** store the available option as an array in the productDetail list
             * delete duplicate element and store the value
             * convert price or pricerefer value (string to number)
             **/
            if (payload.products[0]) {
                let arrayProductDetail: any;
                arrayProductDetail = clonedPayload;
                for (let i = 0; i < clonedPayload.length; i++) {
                    const optionsSelected: any = payload.products[i]._optionValueArray;
                    if (payload.products[i]._optionValueArray) {
                        if (payload.products[i]._optionValueArray.length > 0) {
                            for (let hh = 0; hh < clonedPayload[i]._optionValueArray.length; hh++) {
                                for (let w = 0; w < arrayProductDetail.length; w++) {
                                    if (arrayProductDetail[w]) {
                                        if (arrayProductDetail[w].productOption) {
                                            for (let y = 0; y < arrayProductDetail[w].productOption.length; y++) {
                                                if (arrayProductDetail[w].productOption[y].optionValue) {
                                                    const tempOptionValueArray: any = arrayProductDetail[w].productOption[y].optionValue;
                                                    for (let p = 0; p < tempOptionValueArray.length; p++) {
                                                        if (tempOptionValueArray[p].optionValueName === clonedPayload[i]._optionValueArray[hh]) {
                                                            const object: any = {};
                                                            object.name = arrayProductDetail[w].productOption[y].optionname;
                                                            object.value = clonedPayload[i]._optionValueArray[hh];
                                                            tempArray.push(object);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }


                            // re-assign array with option name and option values
                            const tempProductOptionsArray: any = [];
                            if (clonedPayload[i].productOption) {
                                for (let gg = 0; gg < clonedPayload[i].productOption.length; gg++) {
                                    const productOption = clonedPayload[i].productOption;
                                    if (clonedPayload[i].productOption[gg]['optionValue']) {
                                        const optionValue = productOption[gg]['optionValue'];
                                        for (let h = 0; h < optionValue.length; h++) {
                                            const param: any = {};
                                            param.productOptionId = productOption[gg].productOptionId;
                                            param.productOptionValueId = productOption[gg].optionValue[h].productOptionValueId;
                                            param.name = productOption[gg].optionname;
                                            param.value = productOption[gg].optionValue[h].optionValueName;
                                            param.type = productOption[gg].optiontype;
                                            tempProductOptionsArray.push(param);
                                        }
                                    }

                                }
                            }
                            clonedPayload[i].productOption = tempProductOptionsArray;
                            let tempOptionsArray: any = [];
                            for (let j = 0; j < clonedPayload[i].productOption.length; j++) {
                                for (let k = 0; k < optionsSelected.length; k++) {
                                    if (clonedPayload[i].productOption[j].value === optionsSelected[k]) {
                                        tempOptionsArray.push(clonedPayload[i].productOption[j]);
                                    }
                                }
                            }
                            clonedPayload[i].productOption = tempOptionsArray;
                            tempOptionsArray = [];
                            // end


                        } else {
                            const emptyValue: any = {};
                            emptyValue.name = '';
                            emptyValue.value = '';
                            tempArray.push(emptyValue);
                        }
                        if (payload.products[i]._optionValueArray.length > 0) {
                            for (let k = 0; k < tempArray.length; k++) {
                                if (tempArray[k] && tempArray[k]['name']) {
                                    for (let l = k + 1; l < tempArray.length; l++) {
                                        if (tempArray[l]['name'] && tempArray[k]['name']) {
                                            if (tempArray[k].name === tempArray[l].name) {
                                                tempArray[k].value += ',' + tempArray[l].value;
                                                tempArray.splice(l, 1);
                                                k--;
                                                l--;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        clonedPayload[i]._optionValueArray = tempArray;
                        tempArray = [];
                    }
                    // delete
                }
            }
            if (clonedPayload[0]) {
                for (let j = 0; j < clonedPayload.length; j++) {

                    if (clonedPayload[j].pricerefer) {
                        const tempPricePrefer = parseInt(clonedPayload[j].pricerefer, 10);
                        clonedPayload[j].pricerefer = tempPricePrefer;
                    } else {
                        const tempPrice = parseInt(clonedPayload[j].price, 10);
                        clonedPayload[j].price = tempPrice;
                    }
                }
            } else {
                if (clonedPayload.pricerefer) {
                    const tempPricePrefer = parseInt(clonedPayload.pricerefer, 10);
                    clonedPayload.pricerefer = tempPricePrefer;
                } else {
                    const tempPrice = parseInt(clonedPayload.price, 10);
                    payload.products.price = tempPrice;
                }
            }
            return Object.assign({}, state, {
                cartList: clonedPayload,
                cartCount: payload.productTotal,
                totalCartPrice: payload.totalPrice,
                checkedOut: {}

            });
        }

        // productOptions (filter the selected available option from total available options)optionsSelected
        case actions.ActionTypes.DO_CHECKOUT: {
            return Object.assign({}, state, {
                checkedOut: {},
                checkoutLoading: true,
                checkoutLoaded: false,
                checkoutFailed: false,
            });
        }
        case actions.ActionTypes.DO_CHECKOUT_SUCCESS: {
            return Object.assign({}, state, {
                checkedOut: payload.data,
                checkoutLoading: false,
                checkoutLoaded: true,
                checkoutFailed: false,
            });
        }
        case actions.ActionTypes.DO_CHECKOUT_FAIL: {
            return Object.assign({}, state, {
                checkedOut: {},
                checkoutLoading: false,
                checkoutLoaded: true,
                checkoutFailed: true,
            });
        }
        // selected options
        case actions.ActionTypes.DO_SELECTED_OPTIONS: {
            const tempArray: any = [];
            tempArray.push(payload._optionValueArray);
            return Object.assign({}, state, {
                selectedOptions: tempArray,
            });
        }
        // available options
        case actions.ActionTypes.DO_AVAILABLE_OPTIONS: {
            return Object.assign({}, state, {});
        }

        case actions.ActionTypes.DO_AVAILABLE_OPTIONS_SUCCESS: {
            return Object.assign({}, state, {
                optionsAvailable: payload,
            });
        }
        default: {
            return state;
        }
    }
}

export const getCartList = (state: ProductControlState) => state.cartList;
export const getCartListCount = (state: ProductControlState) => state.cartCount;
export const getTotalCartPrice = (state: ProductControlState) => state.totalCartPrice;
export const getCheckedOut = (state: ProductControlState) => state.checkedOut;

export const getCheckoutLoading = (state: ProductControlState) => state.checkoutLoading;
export const getCheckoutLoaded = (state: ProductControlState) => state.checkoutLoaded;
export const getCheckoutFailed = (state: ProductControlState) => state.checkoutFailed;

export const getOptionsAvailable = (state: ProductControlState) => state.optionsAvailable;



