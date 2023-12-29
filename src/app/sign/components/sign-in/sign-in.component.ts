import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  formSubmitted: boolean = false;

  constructor(private router: Router) {}
  private auth: any;

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
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
