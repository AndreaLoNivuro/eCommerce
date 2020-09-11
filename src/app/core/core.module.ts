import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCommunicationService } from './HttpCommunication/http-communication.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [HttpCommunicationService, AuthService],
  imports: [HttpClientModule]
})
export class CoreModule { }
