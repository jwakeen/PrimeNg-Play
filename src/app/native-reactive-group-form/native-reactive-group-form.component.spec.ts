import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeReactiveGroupFormComponent } from './native-reactive-group-form.component';

describe('NativeReactiveGroupFormComponent', () => {
  let component: NativeReactiveGroupFormComponent;
  let fixture: ComponentFixture<NativeReactiveGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeReactiveGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeReactiveGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
