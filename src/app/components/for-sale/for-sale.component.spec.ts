import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleComponent } from './for-sale.component';

describe('ForSaleComponent', () => {
  let component: ForSaleComponent;
  let fixture: ComponentFixture<ForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
