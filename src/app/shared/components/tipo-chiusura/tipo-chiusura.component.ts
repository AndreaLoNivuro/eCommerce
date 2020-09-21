import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tipo-chiusura',
  templateUrl: './tipo-chiusura.component.html',
  styleUrls: ['./tipo-chiusura.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TipoChiusuraComponent),
      multi: true
    }]
})
export class TipoChiusuraComponent implements OnInit, ControlValueAccessor {

  onChange: any = () => {};
  onTouch: any = () => {};
  value: string;
  chiusure: string[] = ['Stringhe', 'Strappi', 'Elasticizzata'];

  constructor() { }

  writeValue(obj: string): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  selectTipoChiusura(item: string) {
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }
}