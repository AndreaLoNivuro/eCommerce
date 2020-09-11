import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './main/login.component';
import { LoginService } from './services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
