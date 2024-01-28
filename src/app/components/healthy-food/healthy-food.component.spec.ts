import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyFoodComponent } from './healthy-food.component';

describe('HealthyFoodComponent', () => {
  let component: HealthyFoodComponent;
  let fixture: ComponentFixture<HealthyFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthyFoodComponent]
    });
    fixture = TestBed.createComponent(HealthyFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
