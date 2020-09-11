import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { loginUser } from 'src/app/redux/users/login.action';
import { selectErrorMessage } from 'src/app/redux/users';

@Injectable()
export class LoginService {

  constructor(private router: Router, private store: Store) { }

  get error(){
    return this.store.pipe(select(selectErrorMessage));
  }

  executeLogin(username: string, password: string) {
    this.store.dispatch(loginUser({username, password}))

  }
}
