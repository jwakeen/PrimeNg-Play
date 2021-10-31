import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent implements OnInit {
  user!: User;
  nameForm = this.fb.group({
    // This field is not displayed, but the model must match the FormGroup's schema.
    id: [''],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserById(11).subscribe((u) => {
      this.user = u;
      this.nameForm.setValue(u);
    });
  }

  get firstName() {
    return this.nameForm.get('firstName');
  }

  get lastName() {
    return this.nameForm.get('lastName');
  }

  get email() {
    return this.nameForm.get('email');
  }

  get age() {
    return this.nameForm.get('age');
  }

  onSubmit() {
    console.log(this.nameForm.value);

    // Actually submit the user to a service.

    alert('Submitted');
  }
}
