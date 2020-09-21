import { NgModule } from '@angular/core';

import { PersonalizzaRoutingModule } from './personalizza-routing.module';
import { PersonalizzaComponent } from './main/personalizza.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PersonalizzaComponent],
  imports: [
    SharedModule,
    PersonalizzaRoutingModule
  ]
})
export class PersonalizzaModule { }
