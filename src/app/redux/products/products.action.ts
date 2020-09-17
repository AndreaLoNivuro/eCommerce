import { createAction, props } from '@ngrx/store';
import { Products } from 'src/app/core/model/products.interface';

//prendi tutti i prodotti
export const retrieveAllProducts = createAction('[Product] tutti i modelli');
export const initProduct = createAction('[Product] product', props<{products: Products[]}>());

//carrello
export const retrieveCart = createAction('[Cart] init', props<{prodotti: Products[]}>());
export const addToCart = createAction('[Cart] add', props<{prodotto: Products}>());
export const removeItem = createAction('[Cart] remove item', props<{id:number}>());