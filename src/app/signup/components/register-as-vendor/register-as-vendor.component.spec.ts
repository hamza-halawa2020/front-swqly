import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsVendorComponent } from './register-as-vendor.component';

describe('RegisterAsVendorComponent', () => {
  let component: RegisterAsVendorComponent;
  let fixture: ComponentFixture<RegisterAsVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAsVendorComponent]
    });
    fixture = TestBed.createComponent(RegisterAsVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
