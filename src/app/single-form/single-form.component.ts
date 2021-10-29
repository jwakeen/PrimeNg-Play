import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss'],
})
export class SingleFormComponent implements OnInit {
  userName: string = '';

  constructor() {}

  ngOnInit(): void {}

  toUpper() {
    this.userName = this.userName.toUpperCase();
  }
}
