import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsClientComponent } from './register-as-client.component';

describe('RegisterAsClientComponent', () => {
  let component: RegisterAsClientComponent;
  let fixture: ComponentFixture<RegisterAsClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAsClientComponent]
    });
    fixture = TestBed.createComponent(RegisterAsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
