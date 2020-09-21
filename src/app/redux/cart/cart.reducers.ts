import { Action, createReducer, on } from '@ngrx/store';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { addItemSuccess, initCart, removeAllItem, removeItemSuccess } from './cart.action';

export interface CartState {
    cart: CustomProduct[];
}

export const initialState: CartState = {
    cart: []
};

export const cartReducer = createReducer(
    initialState,
    on(initCart, (state, { customProduct }) => ({ ...state, cart:  customProduct})),
    on(addItemSuccess, (state, {customProduct}) => ({...state, products:[...state.cart, customProduct]})),
    on(removeItemSuccess,(state, {id}) => ({ ...state, products:state.cart.filter(item=>item.prodotto.id !== id) })),
    on(removeAllItem, (state) => ({...state, cart: []})),
);

export function reducer(state: CartState, action: Action) {
    return cartReducer(state, action);
}