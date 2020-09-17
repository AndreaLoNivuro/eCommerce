import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ProductsState } from './products.reducers';

export const selectProductsState = (state: AppState) => state.productsState;

export const selectProducts = createSelector(
    selectProductsState,
    (state: ProductsState) => state.products
);

export const selectProductsByMarca = createSelector(
    selectProductsState,
    (state: ProductsState, props: {marca: string}) => {
        return state.products.filter(product => product.marca === props.marca)
    }
);