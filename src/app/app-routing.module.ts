import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './core/guard/login-guard.service';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuardService] },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule), canLoad: [LoginGuardService] },
  { path: 'personalizza', loadChildren: () => import('./features/personalizza/personalizza.module').then(m => m.PersonalizzaModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
