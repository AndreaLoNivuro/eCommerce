import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { HttpCommunicationService } from 'src/app/core/HttpCommunication/http-communication.service';
import { Action } from '@ngrx/store';
import { Cart } from 'src/app/core/model/cart.interface';
import { initCart, retrieveAllCart } from './cart.action';

@Injectable()
export class CartEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationService,private router: Router){}

    retreiveCart():Observable<Cart[]>{
        return this.http.retrieveGetCall<Cart[]>("cart")
    }

    getCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCart),
        switchMap(() => this.retreiveCart().pipe(
            map((cart) => initCart({cart}))

        ))
    ));
}
