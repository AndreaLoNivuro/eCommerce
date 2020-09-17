import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCommunicationService } from 'src/app/core/HttpCommunication/http-communication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Products } from 'src/app/core/model/products.interface';
import { initProduct, retrieveAllProducts } from './products.action';
import { Action } from '@ngrx/store';


@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationService,private router: Router){}

    retreiveAllProducts():Observable<Products[]>{
        return this.http.retrieveGetCall<Products[]>("products")
    }

    getAllProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllProducts),
        switchMap(() => this.retreiveAllProducts().pipe(
            map((products) => initProduct({products}))

        ))
    ));

}