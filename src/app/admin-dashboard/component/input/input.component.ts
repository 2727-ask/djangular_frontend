import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting :forwardRef(()=>InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  public value:string = "";
  public onChanged: (val:string)=> void;
  public touched :()=>void;

  constructor() { }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  ngOnInit(): void {
  }

}
