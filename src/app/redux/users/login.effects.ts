import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCommunicationService } from 'src/app/core/HttpCommunication/http-communication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from 'src/app/core/model/user.interface';
import { loginUser, loginUserFailure, loginUserSuccess, initUser, signUpUser, signUpUserSuccess, addAddressInfo, addAddressInfoSuccess } from './login.action';
import { select, Store } from '@ngrx/store';
import { getCurrentUser } from '.';
import { Address } from 'src/app/core/model/address.interface';

@Injectable()
export class LoginEffects{
    
  constructor(private actions$: Actions, private http: HttpCommunicationService,private router: Router, private store: Store){}

  retreiveAllUsers():Observable<User[]>{
    return this.http.retrieveGetCall<User[]>("users")
  }
  
  checkUserAccount(username:string,password:string,users){
    return users.find(actualUser=>actualUser.username === username && actualUser.password === password);
  }
  
  registerUser(username: string, name: string, surname: string, password: string):Observable<User>{
    return this.http.retrievePostCall<User>("users",{username, name, surname, password})
  }

  formatUser(user: User): User{
    return {id: user.id, username: user.username, name: user.name, surname: user.surname, password: user.password} as User;
  }

  addUserAddress$ = createEffect(() => this.actions$.pipe(
    ofType(addAddressInfo),
    withLatestFrom(this.store.pipe(select(getCurrentUser))),
    switchMap(([action, user]) => this.http.retrievePostCall("usersAddress", {
      "userId": user.id,
      "cellulare": action.address.cellulare,
      "citta": action.address.citta,
      "cap": action.address.cap,
      "indirizzo": action.address.indirizzo,
      "numerocivico": action.address.numerocivico,
      "informazioni": action.address.informazioni
    }).pipe(
      map((address: Address) => addAddressInfoSuccess({address: address}))
    ))
  ), { dispatch: false });

  loginUser$=createEffect(()=>this.actions$.pipe(
    ofType(loginUser),
    switchMap(action=>this.retreiveAllUsers().pipe(
      switchMap(users=>of(this.checkUserAccount(action.username,action.password,users)).pipe(
        map( user=>{
          if(typeof user === 'undefined'){
            return loginUserFailure({error:'username e/o password non corretta'})
          }else{
            return loginUserSuccess({user});
          }
        })
      ))
    ))
  ));

  loginUserSuccess$=createEffect(()=>this.actions$.pipe(
    ofType(loginUserSuccess),
    tap(action=>{
      console.log('salvo utente in sessione da auth.effects');
      sessionStorage.setItem("utente", JSON.stringify(action.user))
    }),
    map( (action) => initUser({ user: action.user })),
    tap(()=>this.router.navigateByUrl('/home'))
  ));
      
  signUpUser$=createEffect(()=>this.actions$.pipe(
    ofType(signUpUser),
    switchMap(action=>this.registerUser(action.username, action.name, action.surname, action.password).pipe(
      tap(user=> console.log(user)),
    switchMap(user=>of(this.formatUser(user)).pipe(
    map( (formattedUser) => signUpUserSuccess({ user: formattedUser }))
    ))
    ))
  ));
        
  signUpUserSuccess$=createEffect(()=>this.actions$.pipe(
    ofType(signUpUserSuccess),
    map( (action) => initUser({ user:action.user })),
    tap((action)=>{
      sessionStorage.setItem("utente", JSON.stringify(action.user))
      this.router.navigateByUrl('/home');
    })
  ));
}