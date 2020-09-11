import { NgModule } from '@angular/core';
import { HttpCommunicationService } from './HttpCommunication/http-communication.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [HttpCommunicationService],
  imports: [HttpClientModule]
})
export class CoreModule { }
