import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamstersComponent } from './hamsters.component';

describe('HamstersComponent', () => {
  let component: HamstersComponent;
  let fixture: ComponentFixture<HamstersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamstersComponent]
    });
    fixture = TestBed.createComponent(HamstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
