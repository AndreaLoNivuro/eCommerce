import { createAction, props } from '@ngrx/store';
import { Cart } from 'src/app/core/model/cart.interface';

export const retrieveAllCart = createAction('[Cart] retrieve all');
export const initCart = createAction('[Cart] init', props<{cart: Cart[]}>());
export const addItem = createAction('[Cart] add item', props<{cart: Cart}>());
export const removeItem = createAction('[Cart] remove item', props<{id: number}>());
export const removeAllItem = createAction('[Cart] remove all item');