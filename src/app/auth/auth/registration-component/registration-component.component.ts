import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  validateForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    userName: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    userName: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder) { }
}
