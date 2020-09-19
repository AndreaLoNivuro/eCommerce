import { Action, createReducer, on } from '@ngrx/store';
import { Cart } from 'src/app/core/model/cart.interface';
import { initCart } from './cart.action';

export interface CartState {
    cart: Cart[];
}

export const initialState: CartState = {
    cart: []
};

export const cartReducer = createReducer(
    initialState,
    on(initCart, (state, { cart }) => ({ ...state, cart:  cart})),
);

export function reducer(state: CartState, action: Action) {
    return cartReducer(state, action);
}