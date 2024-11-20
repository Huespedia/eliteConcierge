import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBarComponent } from './food-bar.component';

describe('FoodBarComponent', () => {
  let component: FoodBarComponent;
  let fixture: ComponentFixture<FoodBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodBarComponent]
    });
    fixture = TestBed.createComponent(FoodBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
