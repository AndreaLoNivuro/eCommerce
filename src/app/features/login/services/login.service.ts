import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/model/user';
import { initUser, loginUser } from 'src/app/redux/users/login.action';
@Injectable()
export class LoginService {

  constructor(private router: Router, private store: Store) { }

  executeLogin(username: string, password: string) {
    this.store.dispatch(loginUser({username, password}))

  }
}
