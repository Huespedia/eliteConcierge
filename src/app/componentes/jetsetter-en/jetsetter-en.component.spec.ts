import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetsetterEnComponent } from './jetsetter-en.component';

describe('JetsetterEnComponent', () => {
  let component: JetsetterEnComponent;
  let fixture: ComponentFixture<JetsetterEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JetsetterEnComponent]
    });
    fixture = TestBed.createComponent(JetsetterEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
