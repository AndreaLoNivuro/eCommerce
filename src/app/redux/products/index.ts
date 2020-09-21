import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
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

export const getCurrentNavigatedProduct = createSelector(
    selectProductsState,
    selectRouteParams,
    (state: ProductsState, params: Params) => state.products.find(item => item.id === Number(params['id']))
);