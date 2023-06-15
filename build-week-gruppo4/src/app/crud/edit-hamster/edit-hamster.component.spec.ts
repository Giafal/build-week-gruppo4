import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHamsterComponent } from './edit-hamster.component';

describe('EditHamsterComponent', () => {
  let component: EditHamsterComponent;
  let fixture: ComponentFixture<EditHamsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHamsterComponent]
    });
    fixture = TestBed.createComponent(EditHamsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
