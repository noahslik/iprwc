import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  countryOptions = [
    {
      label: "Belgium",
      value: "belgium"
    },
    {
      label: "Netherlands",
      value: "netherlands"
    }
  ]

  checkoutForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    country: ['netherlands']
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.checkoutForm.value);
  }
}
