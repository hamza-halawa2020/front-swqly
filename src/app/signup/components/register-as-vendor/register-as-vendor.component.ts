import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupServiceService } from '../../signupService/signup-service.service';

@Component({
  selector: 'app-register-as-vendor',
  templateUrl: './register-as-vendor.component.html',
  styleUrls: ['./register-as-vendor.component.css'],
})
export class RegisterAsVendorComponent {
  formSubmitted: boolean = false;
  governorates: any;
  cities: any;
  ShopCategory: any;
  constructor(
    private router: Router,
    private registerUser: SignupServiceService
  ) {}

  ngOnInit(): void {
    this.getGovernorates();
    this.getShopCategory();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    full_name: new FormControl('', [Validators.required]),
    governorate_id: new FormControl('', [Validators.required]),
    city_id: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    shop_category_id: new FormControl('', [Validators.required]),

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
    role: new FormControl('بائع'),
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
    return this.loginForm.get('city_id') as FormControl;
  }
  get address(): FormControl {
    return this.loginForm.get('address') as FormControl;
  }
  get shop_category_id(): FormControl {
    return this.loginForm.get('shop_category_id') as FormControl;
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

  getGovernorates() {
    this.registerUser.getGovernorates().subscribe((data) => {
      this.governorates = data;
      console.log('governorates', this.governorates);
    });
  }
  getShopCategory() {
    this.registerUser.getshopCategory().subscribe((data) => {
      this.ShopCategory = data;
      console.log('ShopCategory', this.ShopCategory);
    });
  }

  loginSubmitted() {
    if (this.loginForm.valid) {
      this.formSubmitted = true;
      this.loginForm.patchValue({ role: 'بائع' });
      this.registerUser.registerUser(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log('success registeration');
          this.loginForm.reset();
          this.router.navigate(['login']);
        },
        error: () => {
          console.log("can't signup", this.loginForm.value);
        },
      });
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }

  onGovernorateClick(event: any) {
    const selectedValue = +event.target.value;
    if (selectedValue) {
      const selectedGovernorate = this.governorates.find(
        (g: any) => g.id === selectedValue
      );
      if (selectedGovernorate) {
        this.cities = selectedGovernorate.cities;
        this.loginForm.patchValue({
          governorate_id: selectedValue.toString(),
          city_id: '',
        });
        console.log('cities:', this.cities);
        console.log('Selected governorate:', this.loginForm.value);
      } else {
        console.log('Selected governorate not found:', selectedValue);
      }
    }
  }
}
