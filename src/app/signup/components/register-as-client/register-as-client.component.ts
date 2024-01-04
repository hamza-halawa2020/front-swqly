import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupServiceService } from '../../signupService/signup-service.service';

@Component({
  selector: 'app-register-as-client',
  templateUrl: './register-as-client.component.html',
  styleUrls: ['./register-as-client.component.css'],
})
export class RegisterAsClientComponent {
  formSubmitted: boolean = false;
  governorates: any;

  constructor(
    private router: Router,
    private registerUser: SignupServiceService
  ) {}

  ngOnInit(): void {
    this.getGovernorates();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    full_name: new FormControl('', [Validators.required]),
    governorate_id: new FormControl('', [Validators.required]),
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
    role: new FormControl('عميل'),
  });

  get full_name(): FormControl {
    return this.loginForm.get('full_name') as FormControl;
  }
  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get governorate_id(): FormControl {
    return this.loginForm.get('governorate_id') as FormControl;
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

  getGovernorates() {
    this.registerUser.getGovernorates().subscribe((data) => {
      // this.governorates = Object.values(data)[0];
      this.governorates = data;
      console.log('governorates', this.governorates);
    });
  }

  loginSubmitted() {
    if (this.loginForm.valid) {
      this.formSubmitted = true;
      this.loginForm.patchValue({ role: 'عميل' });
      this.registerUser.registerUser(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log('success registeration');
          this.loginForm.reset();
          this.router.navigate(['login']);
        },
        error: () => {
          console.log("can't signup");
        },
      });
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
