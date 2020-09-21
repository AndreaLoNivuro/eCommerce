import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { User } from 'src/app/core/model/user.interface';
import { getCartProducts, getCurrentNavigatedCart } from 'src/app/redux/cart';
import { getCurrentUser } from 'src/app/redux/users';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  currentUserId: number;

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  }

  
  constructor(private store: Store, private router: Router, private cartService: CartService) {
    
  }
  get cart(): Observable<CustomProduct[]> {
    return this.store.pipe(select(getCartProducts));
  }
  get userCart(): Observable<CustomProduct[]> {
    return this.store.pipe(select(getCurrentNavigatedCart));
  }
  
  ngOnInit(): void {
    this.user.subscribe(currentUser => {
      this.currentUserId = currentUser.id
      console.log(this.cart)
      console.log(this.userCart);
    })
  }
  



}
