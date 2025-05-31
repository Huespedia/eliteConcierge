import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaEnComponent } from './galeria-en.component';

describe('GaleriaEnComponent', () => {
  let component: GaleriaEnComponent;
  let fixture: ComponentFixture<GaleriaEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaEnComponent]
    });
    fixture = TestBed.createComponent(GaleriaEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
