import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { createSelector, ActionReducerMap } from '@ngrx/store';
import { productsReducer, ProductsState } from './products/products.reducers';
import { UsersState, usersReducer } from './users/login.reducers';

export interface AppState {
    usersState: UsersState;
    productsState: ProductsState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
    productsState: productsReducer,
    router: routerReducer,
};