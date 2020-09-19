import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Address } from 'src/app/core/model/address.interface';
import { User } from 'src/app/core/model/user.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address: Address;
  utente: User;
  formSpedizione: FormGroup;

  constructor( private store:Store, private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formSpedizione = this.fb.group({
      nome: [this.address?.nome, Validators.required],
      cognome: [this.address?.cognome, Validators.required],
      cellulare: [this.address?.cellulare, Validators.required],
      citta: [this.address?.citta, Validators.required],
      cap: [this.address?.cap, Validators.required],
      indirizzo: [this.address?.indirizzo,Validators.required],
      numerocivico: [this.address?.numerocivico, Validators.required],
      informazioni: [this.address?.informazioni],
    });
  }

  goCheckout() {
    
  }

}
