import { NgModule } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './main/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    CartComponent,
    AddressComponent,
    PaymentComponent
  ],
  providers: [
    CartService
  ],
  imports: [
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
