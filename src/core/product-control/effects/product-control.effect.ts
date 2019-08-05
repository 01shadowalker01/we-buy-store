/*
 * spurtcommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as store from '../../state.interface';
import { catchError } from 'rxjs/internal/operators';
import * as actions from './../action/product-control.action';
import {ProductControlService} from '../product-control.service';
import * as countActions from '../../common/action/common.action';
import * as wishlistActions from '../../wishlist/action/wishlist.action';

@Injectable()
export class ProductControlEffect {
    parameter: any = {limit: '', offser: 0};
    countParameter: any = {limit: '', offser: 0, count: true };
    constructor(private actions$: Actions,
                private authApi: ProductControlService,
                private appState$: Store<store.AppState>) {
    }
    /* handle add to wishlist action*/
    @Effect()
    addToWishlist$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.ADD_TO_WISHLIST),
            map((action: actions.AddtoWishlist) => action.payload),
            switchMap((state) => {
                return this.authApi.addToWishlist(state)
                    .pipe(
                        switchMap((register) => [new actions.AddtoWishlistSuccess(register),
                            new wishlistActions.GetWishlist(this.parameter),
                            new countActions.GetWishlistCount(this.countParameter)]),
                        catchError(error => of(new actions.AddtoWishlistFail(error)))
                    );
            })
        );
    /* handle add to checkout action*/

    @Effect()
    checkout$: Observable<Action> = this.actions$
        .pipe(
            ofType(actions.ActionTypes.DO_CHECKOUT),
            map((action: actions.DoCheckoutAction) => action.payload),
            switchMap((state) => {
                const cartList = state.productDetails.product;
                state.productDetails = cartList;
                return this.authApi.CheckoutProduct(state)
                    .pipe(
                        map((checkout) => new actions.CheckoutActionSuccess(checkout)),
                        catchError(error => of(new actions.CheckoutActionFail(error)))
                    );
            })
        );
}
