import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-native-reactive-form',
  templateUrl: './native-reactive-form.component.html',
  styleUrls: ['./native-reactive-form.component.scss'],
})
export class NativeReactiveFormComponent implements OnInit {
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  lastName = new FormControl('Asdf', [
    Validators.required,
    Validators.minLength(4),
  ]);

  constructor() {}

  ngOnInit(): void {}

  updateFirstName() {
    this.firstName.setValue('Jim');
  }

  areAllControlsValid(): boolean {
    console.log(
      this.firstName.valid,
      this.lastName.valid,
      this.firstName.valid && this.lastName.valid
    );
    return this.firstName.valid && this.lastName.valid;
  }

  onSubmit() {
    alert('Submitted');
  }
}
