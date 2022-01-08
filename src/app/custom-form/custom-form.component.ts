import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  count: number = 5;
  selectedState: string = 'Iowa';

  constructor() {}

  ngOnInit(): void {}

  onValueChanged(event: number) {
    console.log(event);
    this.count = event;
  }

  onStateSelected(event: string) {
    console.log(event);
    this.selectedState = event;
  }

  onSubmit() {
    console.log(this.selectedState);
    this.selectedState = 'Ohio';
  }
}
