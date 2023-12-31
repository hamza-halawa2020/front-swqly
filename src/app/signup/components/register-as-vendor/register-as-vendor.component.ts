import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-as-vendor',
  templateUrl: './register-as-vendor.component.html',
  styleUrls: ['./register-as-vendor.component.css'],
})
export class RegisterAsVendorComponent {
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
    address: new FormControl('', [Validators.required]),
    shop_categories: new FormControl('', [Validators.required]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^(010|011|012|015)\\d{8}$'),
    ]),
    profile_image: new FormControl('', [Validators.required]),
    cover_image: new FormControl('', [Validators.required]),

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
  get address(): FormControl {
    return this.loginForm.get('address') as FormControl;
  }
  get shop_categories(): FormControl {
    return this.loginForm.get('shop_categories') as FormControl;
  }
  get phone(): FormControl {
    return this.loginForm.get('phone') as FormControl;
  }
  get profile_image(): FormControl {
    return this.loginForm.get('profile_image') as FormControl;
  }
  get cover_image(): FormControl {
    return this.loginForm.get('cover_image') as FormControl;
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
