import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, Route } from '@angular/router';
import { saveCurrentUser } from 'src/app/redux/users/login.action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanLoad {

  constructor(private router: Router, private store: Store) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (sessionStorage.getItem("user") != null) {
      this.store.dispatch(saveCurrentUser({user: JSON.parse(sessionStorage.getItem("user"))}));
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}