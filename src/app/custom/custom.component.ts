import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  @Input('value') count: number = 0;

  @Output()
  valueChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDecrement() {
    this.count--;
    this.valueChanged.emit(this.count);
  }

  onIncrement() {
    this.count++;
    this.valueChanged.emit(this.count);
  }
}
