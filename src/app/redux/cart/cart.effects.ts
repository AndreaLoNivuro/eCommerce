import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, filter, find } from 'rxjs/operators';
import { HttpCommunicationService } from 'src/app/core/HttpCommunication/http-communication.service';
import { Action, select, Store } from '@ngrx/store';
import { CustomProduct } from 'src/app/core/model/customproduct.interface';
import { addItem, addItemSuccess, initCart, removeItem, removeItemSuccess, retrieveAllCart } from './cart.action';
import { getCurrentUser } from '../users';
import { getCartProducts, selectCartState } from '.';

@Injectable()
export class CartEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationService, private store: Store, private router: Router){}

    retreiveCart():Observable<CustomProduct[]>{
        return this.http.retrieveGetCall<CustomProduct[]>("cart")
    }

    getCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCart),
        withLatestFrom(this.store.pipe(select(getCurrentUser)), this.store.pipe(select(selectCartState))),
        switchMap(() => this.retreiveCart().pipe(
            map((customProduct) => initCart({customProduct}))
        ))
    ));

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addItem),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        switchMap(([action, user]) => this.http.retrievePostCall("cart", {
            "userId": user.id,
            "prodotto": action.customProduct.prodotto,
            "chiusura": action.customProduct.chiusura,
            "numero": action.customProduct.numero,
            "testo": action.customProduct.testo,
            "coloretesto": action.customProduct.coloretesto
        }).pipe(
            map((customProduct: CustomProduct) => addItemSuccess({customProduct: customProduct}))
        ))
    ));

    // removeProducts$: Observable<Action> = createEffect(()=>this.actions$.pipe(
    //     ofType(removeItem),
    //     withLatestFrom(this.store.pipe(select(getCurrentUser)), this.store.pipe(select(getCartProducts))),
    //     switchMap(([action, user, cart])=> this.http.retrieveDeleteCall("cart").pipe(
    //         map(customProduct => removeItemSuccess({ user.id, customProduct }))
    //     ))
    // ));
}
