import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../core/model/user.interface';
import { getCurrentUser } from '../redux/users';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentRoute: string = null;
  currentUserId: number;

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  }

  constructor(private router: Router, private store: Store) { 
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
    });
  }

  ngOnInit(): void {
    this.user.subscribe(currentUser => {
      this.currentUserId = currentUser.id
      console.log(this.currentUserId)
    })
  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigateByUrl('/login');
  }

}
