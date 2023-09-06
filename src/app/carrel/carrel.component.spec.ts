import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelComponent } from './carrel.component';

describe('CarrelComponent', () => {
  let component: CarrelComponent;
  let fixture: ComponentFixture<CarrelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrelComponent]
    });
    fixture = TestBed.createComponent(CarrelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
