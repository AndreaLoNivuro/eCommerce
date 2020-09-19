import { createAction, props } from '@ngrx/store';
import { Products } from 'src/app/core/model/products.interface';

//prendi tutti i prodotti
export const retrieveAllProducts = createAction('[Product] tutti i modelli');
export const initProduct = createAction('[Product] product', props<{products: Products[]}>());
