import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-native-reactive-group-form',
  templateUrl: './native-reactive-group-form.component.html',
  styleUrls: ['./native-reactive-group-form.component.scss'],
})
export class NativeReactiveGroupFormComponent implements OnInit {
  nameForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  updateNames() {
    this.nameForm.patchValue({
      firstName: 'Jim',
      lastName: 'Wakeen',
    });
  }

  get firstName() {
    return this.nameForm.get('firstName');
  }

  get lastName() {
    return this.nameForm.get('lastName');
  }

  onSubmit() {
    console.log(this.nameForm.value);
    alert('Submitted');
  }
}
