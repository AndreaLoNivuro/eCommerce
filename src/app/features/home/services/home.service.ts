import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllProducts } from 'src/app/redux/products/products.action';

@Injectable()
export class HomeService {

  constructor(private store: Store) { 
    //this.store.dispatch(retrieveAllProducts())
  }
}
