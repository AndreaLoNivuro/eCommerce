import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { addItem } from 'src/app/redux/cart/cart.action';

@Injectable({
  providedIn: 'root'
})
export class PersonalizzaService {

  constructor(private store: Store) { }

  createCustomProduct() {
    
  }

  addToCart(customProduct: CustomProduct) {
    this.store.dispatch(addItem({customProduct}))
  }
}
