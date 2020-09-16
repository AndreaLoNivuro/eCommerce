import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ProductsState } from './products.reducers';

export const selectProductsState = (state: AppState) => state.productsState;

export const selectProducts = createSelector(
    selectProductsState,
    (state: ProductsState) => state.products
);