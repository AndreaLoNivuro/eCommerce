import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { Products } from 'src/app/core/model/products.interface';
import { User } from 'src/app/core/model/user.interface';
import { getCurrentNavigatedProduct } from 'src/app/redux/products';
import { retrieveAllProducts } from 'src/app/redux/products/products.action';
import { ProductsEffects } from 'src/app/redux/products/products.effects';
import { getCurrentUser } from 'src/app/redux/users';
import { PersonalizzaService } from '../services/personalizza.service';

@Component({
  selector: 'app-personalizza',
  templateUrl: './personalizza.component.html',
  styleUrls: ['./personalizza.component.scss']
})
export class PersonalizzaComponent implements OnInit {

  personalizzaForm: FormGroup;
  prodotto: Products;
  img: string = "";
  productNumbers: number[] = [];
  currentUserId: number;
  
  get product(): Observable<Products> {
    return this.store.pipe(select(getCurrentNavigatedProduct));
  }

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  }
  constructor(fb: FormBuilder, private personalizzaService: PersonalizzaService, private store: Store, private router: Router) {
    this.personalizzaForm = fb.group({
      chiusura: ['', Validators.required],
      numero: ['', Validators.required],
      testo: [''],
      coloretesto: [''],
    });
    
  }
  
  ngOnInit(): void {
    //this.store.dispatch(retrieveAllProducts())
    console.log(this.product);
    this.product.subscribe(productSelected => {
      this.prodotto = productSelected;
      this.img = productSelected.img;
      this.productNumbers = productSelected.number;
      console.log(this.img);
    });

    this.user.subscribe(user => {
      this.currentUserId = user.id;
    })
  }
  
  ripristina() {
    this.personalizzaForm.reset()
  }

  add() {
    let cartProduct: CustomProduct = {
      prodotto:  this.prodotto,
      ...this.personalizzaForm.value,
      
    };
    console.log(cartProduct);
    this.personalizzaService.addToCart(cartProduct);
    this.router.navigateByUrl('/cart/'+this.currentUserId);
  }

}
