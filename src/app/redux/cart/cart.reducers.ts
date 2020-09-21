import { Action, createReducer, on } from '@ngrx/store';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { addItem, addItemSuccess, initCart, removeAllItem, removeItem, removeItemSuccess } from './cart.action';

export interface CartState {
    cart: CustomProduct[];
}

export const initialState: CartState = {
    cart: []
};

export const cartReducer = createReducer(
    initialState,
    on(initCart, (state, { customProduct }) => ({ ...state, cart:  customProduct})),
    on(addItem, (state, {customProduct}) => ({...state, products:[...state.cart, customProduct]})),
    on(removeItem,(state, {id}) => ({ ...state, products:state.cart.filter(item=>item.prodotto.id !== id) })),
    on(removeAllItem, (state) => ({...state, cart: []})),
);

export function reducer(state: CartState, action: Action) {
    return cartReducer(state, action);
}