import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpCommunicationService } from 'src/app/core/HttpCommunication/http-communication.service';
import { Action, select, Store } from '@ngrx/store';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { addItem, addItemSuccess, initCart, removeItem, removeItemSuccess, retrieveAllCart } from './cart.action';
import { getCurrentUser } from '../users';
import { selectCartState } from '.';
import { Products } from 'src/app/core/model/products.interface';

@Injectable()
export class CartEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationService, private store: Store, private router: Router){}

    retreiveCart():Observable<CustomProduct[]>{
        return this.http.retrieveGetCall<CustomProduct[]>("cart")
    }

    // registerCustomProduct(prodotto: Products, chiusura: string, numero: string, testo?: string, coloretesto?: string): Observable<CustomProduct>{
    //     return this.http.retrievePostCall<CustomProduct>("customProducts",{prodotto, chiusura, numero, testo, coloretesto})
    // }
     
    //  formatCustomProduct(customProduct: CustomProduct): CustomProduct{
    //      return {prodotto: customProduct.prodotto, chiusura: customProduct.chiusura, numero: customProduct.numero, testo: customProduct.testo, coloretesto: customProduct.coloretesto} as CustomProduct;
    //  }

    getCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCart),
        withLatestFrom(this.store.pipe(select(getCurrentUser)), this.store.pipe(select(selectCartState))),
        switchMap(() => this.retreiveCart().pipe(
            map((customProduct) => initCart({customProduct}))
        ))
    ));

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addItem),
        //switchMap(action=>this.registerUser(action.product, action.chiusura, action.numero, action.testo, action.coloreTesto).pipe(
        switchMap((action) => this.http.retrievePostCall("cart",action.customProduct).pipe(
            
            map((customProduct: CustomProduct) => addItemSuccess({customProduct: customProduct}))
            //map((formatCustomProduct) => addItemSuccess({customProduct: formatCustomProduct}))
        ))
    ));

    // signUpUser$=createEffect(()=>this.actions$.pipe(
    //     ofType(signUpUser),
    //     switchMap(action=>this.registerUser(action.username, action.name, action.surname, action.password).pipe(
    //     tap(user=> console.log(user)),
    //     switchMap(user=>of(this.formatUser(user)).pipe(
    //     map( (formattedUser) => signUpUserSuccess({ user: formattedUser }))
    //     ))
    //     ))
    // ));

    removeProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
        ofType(removeItem),
        switchMap(action=> this.http.retrieveDeleteCall<Products[]>("products/"+action.id).pipe(
            map(products => removeItemSuccess({ id: action.id }))
        ))
    ));
}
