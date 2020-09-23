import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from 'src/app/core/model/address.interface';
import { User } from 'src/app/core/model/user.interface';
import { getCurrentNavigatedUserAddress, getCurrentUser, selectUsersState } from 'src/app/redux/users';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  currentUserId: number;
  userName: string;
  userSurname: string;
  formSpedizione: FormGroup;
  userAddressInfoId: number;

  get userAddressInfo() {
    return this.store.pipe(select(getCurrentNavigatedUserAddress));
  }

  get user(): Observable<User> {
    return this.store.pipe(select(getCurrentUser));
  }

  address: Address
  //currentUser: User;

  constructor( private store:Store, private router: Router, private fb:FormBuilder, private cartService: CartService) { 
    this.formSpedizione = this.fb.group({
      cellulare: ['', Validators.required],
      citta: ['', Validators.required],
      cap: ['', Validators.required],
      indirizzo: ['', Validators.required],
      numerocivico: ['', Validators.required],
      informazioni: [''],
    });

    this.userAddressInfo.subscribe(address => {
      this.formSpedizione.patchValue({
        cellulare: address?.cellulare,
        citta: address?.citta,
        cap: address?.cap,
        indirizzo: address?.indirizzo,
        numerocivico: address?.numerocivico,
        informazioni: address?.informazioni,
      });
      // console.log(user);
      this.userAddressInfoId = address.id;
      this.address = this.formSpedizione.value;
      console.log("form"+this.formSpedizione.value);
      console.log("userAddressInfo"+this.userAddressInfo)
    });
    
    this.user.subscribe(currentUser => {
      this.currentUserId = currentUser.id
      this.userName = currentUser.name;
      this.userSurname = currentUser.surname;
      console.log(this.currentUserId, this.user, this.userSurname, this.userName)
    })
  }

  ripristina() {
    this.formSpedizione.reset()
  }

  ngOnInit(): void {
    //console.log(this.address)
  }

  goCheckout() {
    let userAddress: Address = {
      id:  this.currentUserId,
      ...this.formSpedizione.value,
      
    };
    console.log(this.currentUserId);
    console.log("userAddress.id"+userAddress.id);
    if (this.userAddressInfoId ===  null) {
      this.cartService.addAddressInfo(userAddress);

    }
    this.router.navigateByUrl('payment');
  }

}
