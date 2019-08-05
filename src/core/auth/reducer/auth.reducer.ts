/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import * as actions from '../action/auth.action';
import construct = Reflect.construct;
import {AuthState, authrecord} from './auth.state';

export const initialState: AuthState = new authrecord() as unknown as AuthState;


export function reducer(state = initialState, {type, payload}: any): AuthState {

    if (!type) {

        return state;
    }
    switch (type) {
        case actions.ActionTypes.DO_LOGIN: {

            return Object.assign({}, state, {
                loginLoading: true,
                loginLoaded: false,
                loginFailed: false
            });
        }

        case actions.ActionTypes.DO_LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.user_token,
                loginLoading: false,
                loginLoaded: true,
                loginFailed: false
            });
        }
        case actions.ActionTypes.DO_LOGIN_FAIL: {
            return Object.assign({}, state, {
                loginLoading: false,
                loginLoaded: true,
                loginFailed: true
            });
        }

        case actions.ActionTypes.DO_REGISTER: {

            return Object.assign({}, state, {
                registerLoading: true,
                registerLoaded: false,
                registerFailed: false
            });
        }

        case actions.ActionTypes.DO_REGISTER_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.user_token,
                registerLoading: false,
                registerLoaded: true,
                registerFailed: false
            });
        }
        case actions.ActionTypes.DO_REGISTER_FAIL: {
            return Object.assign({}, state, {
                registerLoading: false,
                registerLoaded: true,
                registerFailed: true
            });
        }

        case actions.ActionTypes.DO_RECOVER: {

            return Object.assign({}, state, {
                recoverLoading: true,
                recoverLoaded: false,
                recoverFailed: false
            });
        }

        case actions.ActionTypes.RECOVER_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.user_token,
                recoverLoading: false,
                recoverLoaded: true,
                recoverFailed: false
            });
        }
        case actions.ActionTypes.RECOVER_FAIL: {
            return Object.assign({}, state, {
                recoverLoading: false,
                recoverLoaded: true,
                recoverFailed: true
            });
        }
        default: {
            return state;
        }
    }
}

export const getToken = (state: AuthState) => state.token;

export const getLoginLoading = (state: AuthState) => state.loginLoading;
export const getLoginLoaded = (state: AuthState) => state.loginLoaded;
export const getLoginFailed = (state: AuthState) => state.loginFailed;

export const getRegisterLoading = (state: AuthState) => state.registerLoading;
export const getRegisterLoaded = (state: AuthState) => state.registerLoaded;
export const getRegisterFailed = (state: AuthState) => state.registerFailed;

export const getRecoverLoading = (state: AuthState) => state.recoverLoading;
export const getRecoverLoaded = (state: AuthState) => state.recoverLoaded;
export const getRecoverFailed = (state: AuthState) => state.recoverFailed;


