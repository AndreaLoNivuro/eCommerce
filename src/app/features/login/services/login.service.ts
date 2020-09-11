import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/model/user';
import { saveCurrentUser } from 'src/app/redux/users/login.action';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class LoginService {

  constructor(private router: Router, private authService: AuthService, private store: Store) { }

  executeLogin(username: string) {
    this.authService.doLogin(username).subscribe((users: User[]) => {
      if (users && users.length > 0) {
        sessionStorage.setItem("user", JSON.stringify(users[0]));
        this.store.dispatch(saveCurrentUser({user: users[0]}));
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });

  }
}
