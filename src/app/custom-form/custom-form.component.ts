import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  count: number = 5;

  constructor() {}

  ngOnInit(): void {}

  onValueChanged(event: any) {
    console.log(event);
    this.count = event;
  }
}
