import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { CartState } from './cart.reducers';

export const selectCartState = (state: AppState) => state.cartState;

export const getCartProducts = createSelector(
    selectCartState,
    (state: CartState) => state.cart
);

export const getCurrentNavigatedCart = createSelector(
    selectCartState,
    selectRouteParams,
    (state: CartState, params: Params) => state.cart.filter(item => item.userId === Number(params['id']))
);


  