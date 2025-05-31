import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WppButtonComponent } from './wpp-button.component';

describe('WppButtonComponent', () => {
  let component: WppButtonComponent;
  let fixture: ComponentFixture<WppButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WppButtonComponent]
    });
    fixture = TestBed.createComponent(WppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
