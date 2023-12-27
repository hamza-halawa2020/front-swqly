import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPartenerComponent } from './register-partener.component';

describe('RegisterPartenerComponent', () => {
  let component: RegisterPartenerComponent;
  let fixture: ComponentFixture<RegisterPartenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPartenerComponent]
    });
    fixture = TestBed.createComponent(RegisterPartenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
