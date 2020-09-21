import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NumeriScarpeComponent } from './components/numeri-scarpe/numeri-scarpe.component';
import { ColoreTestoComponent } from './components/colore-testo/colore-testo.component';
import { TipoChiusuraComponent } from './components/tipo-chiusura/tipo-chiusura.component';



@NgModule({
  declarations: [
    NumeriScarpeComponent,
    ColoreTestoComponent,
    TipoChiusuraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NumeriScarpeComponent,
    ColoreTestoComponent,
    TipoChiusuraComponent
  ]
})
export class SharedModule { }
