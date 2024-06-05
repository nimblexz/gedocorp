import { Component } from '@angular/core';
import {FormControl, FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  form: FormGroup = new FormGroup({
    fruit: new FormControl('Капуста'),
  });
  fruits = ['Яблоко','Тыква'];

  addFruit() {
    if (this.form.controls['fruit'].value !== '') {
      this.fruits.push(this.form.controls['fruit'].value)
    }
  }
}
