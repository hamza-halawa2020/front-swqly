import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilterComponent } from './shop-filter.component';

describe('ShopFilterComponent', () => {
  let component: ShopFilterComponent;
  let fixture: ComponentFixture<ShopFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopFilterComponent]
    });
    fixture = TestBed.createComponent(ShopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
