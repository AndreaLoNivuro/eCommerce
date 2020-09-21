import { createAction, props } from '@ngrx/store';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { Products } from 'src/app/core/model/products.interface';

export const retrieveAllCart = createAction('[Cart] retrieve all');
export const initCart = createAction('[Cart] init', props<{customProduct: CustomProduct[]}>());

export const addItem = createAction('[Cart] add item', props<{customProduct: CustomProduct}>());
export const addItemSuccess = createAction('[Cart] add item success', props<{customProduct: CustomProduct}>());

export const removeItem = createAction('[Cart] remove item', props<{id: number}>());
export const removeItemSuccess = createAction('[Cart] remove item', props<{id: number}>());

export const removeAllItem = createAction('[Cart] remove all item');