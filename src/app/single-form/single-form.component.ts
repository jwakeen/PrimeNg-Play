import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss'],
})
export class SingleFormComponent implements OnInit {
  user: User = new User();
  firstName = new FormControl('');
  lastName = new FormControl('');
  age = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.areAllFieldsValid()) {
      alert('form submitted');
    } else {
      console.log('form has invalid fields');
    }
  }

  areAllFieldsValid(): boolean {
    let result = false;

    result =
      this.firstName.errors === null &&
      this.lastName.errors === null &&
      this.age.errors === null;

    console.log('result is', result);
    return result;
  }
}
