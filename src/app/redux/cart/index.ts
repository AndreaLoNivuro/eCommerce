import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CartState } from './cart.reducers';

export const selectCartState = (state: AppState) => state.cartState;

export const getCartProducts = createSelector(
    selectCartState,
    (state: CartState) => state.cart
);

export const getNumeroProdotti = createSelector (
    selectCartState,
    (state: CartState) => state.cart.length
);

export const getTotaleCarrello = createSelector(
    selectCartState,
    (state: CartState) => {
        return state.cart.reduce((total, current, idx) => total += current.prodotto.prezzo, 0);
    }
);
  