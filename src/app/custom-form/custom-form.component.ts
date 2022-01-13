import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  count: number = 5;
  selectedState: string = '';

  constructor() {}

  ngOnInit(): void {}

  onValueChanged(event: number) {
    console.log(event);
    this.count = event;
  }

  onStateSelected(event: string) {
    console.log('onStateSelected: ', event);
    this.selectedState = event;
  }

  onMississippi() {
    this.onStateSelected('Mississippi');
    console.log('onMississippi: ', this.selectedState);
  }

  onNebraska() {
    this.onStateSelected('Nebraska');
    console.log('onNebraska: ', this.selectedState);
  }

  onOhio() {
    this.onStateSelected('Ohio');
    console.log('onOhio: ', this.selectedState);
  }
}
