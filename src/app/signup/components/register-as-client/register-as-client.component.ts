import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-as-client',
  templateUrl: './register-as-client.component.html',
  styleUrls: ['./register-as-client.component.css'],
})
export class RegisterAsClientComponent {
  formSubmitted: boolean = false;

  constructor(private router: Router) {}
  private auth: any;

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    full_name: new FormControl('', [Validators.required]),
    governorate: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^(010|011|012|015)\\d{8}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  get full_name(): FormControl {
    return this.loginForm.get('full_name') as FormControl;
  }
  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get governorate(): FormControl {
    return this.loginForm.get('governorate') as FormControl;
  }
  get city(): FormControl {
    return this.loginForm.get('city') as FormControl;
  }
  get phone(): FormControl {
    return this.loginForm.get('phone') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  loginSubmitted() {
    if (this.loginForm.valid) {
      this.formSubmitted = true;
      console.log(this.loginForm.value);
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
