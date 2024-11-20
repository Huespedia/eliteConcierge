import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetsetterComponent } from './jetsetter.component';

describe('JetsetterComponent', () => {
  let component: JetsetterComponent;
  let fixture: ComponentFixture<JetsetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JetsetterComponent]
    });
    fixture = TestBed.createComponent(JetsetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
