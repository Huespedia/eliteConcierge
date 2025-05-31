import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2EnComponent } from './seccion2-en.component';

describe('Seccion2EnComponent', () => {
  let component: Seccion2EnComponent;
  let fixture: ComponentFixture<Seccion2EnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion2EnComponent]
    });
    fixture = TestBed.createComponent(Seccion2EnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
