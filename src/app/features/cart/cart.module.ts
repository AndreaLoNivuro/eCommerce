import { NgModule } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './main/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    CartComponent,
    AddressComponent,
    PaymentComponent
  ],
  imports: [
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
