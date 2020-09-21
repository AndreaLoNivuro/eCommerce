import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { retrieveAllCart } from './redux/cart/cart.action';
import { retrieveAllProducts } from './redux/products/products.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eCommerce';
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(retrieveAllProducts())
    this.store.dispatch(retrieveAllCart())
  }
}
