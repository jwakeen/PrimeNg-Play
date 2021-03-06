import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyFormComponent } from './variety-form.component';

describe('VarietyFormComponent', () => {
  let component: VarietyFormComponent;
  let fixture: ComponentFixture<VarietyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
