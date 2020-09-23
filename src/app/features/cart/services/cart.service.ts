import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Address } from 'src/app/core/model/address.interface';
import { User } from 'src/app/core/model/user.interface';
import { addAddressInfo } from 'src/app/redux/users/login.action';

@Injectable()
export class CartService {

  constructor(private store: Store) { }

  addAddressInfo(address: Address) {
    this.store.dispatch(addAddressInfo({address}))
  }
}
