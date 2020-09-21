import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numeri-scarpe',
  templateUrl: './numeri-scarpe.component.html',
  styleUrls: ['./numeri-scarpe.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumeriScarpeComponent),
      multi: true
    }]
})
export class NumeriScarpeComponent implements OnInit, ControlValueAccessor {

  onChange: any = () => {};
  onTouch: any = () => {};
  value: number;
  
  @Input()
  numbers: number[];

  constructor() { }
  writeValue(obj: number): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  selectNumber(item: number) {
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }

}
