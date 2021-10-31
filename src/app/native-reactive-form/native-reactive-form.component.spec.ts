import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeReactiveFormComponent } from './native-reactive-form.component';

describe('NativeReactiveFormComponent', () => {
  let component: NativeReactiveFormComponent;
  let fixture: ComponentFixture<NativeReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
