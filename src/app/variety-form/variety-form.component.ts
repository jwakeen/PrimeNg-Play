import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-variety-form',
  templateUrl: './variety-form.component.html',
  styleUrls: ['./variety-form.component.scss'],
})
export class VarietyFormComponent implements OnInit {
  varietyForm = this.fb.group({
    // This field is not displayed, but the model must match the FormGroup's schema.
    email: ['', [Validators.email]],
    age: [''],
  });
  cities!: City[];

  constructor(private fb: FormBuilder) {
    this.cities = [
      { label: 'Rome', value: 'Rome' },
      { label: 'London', value: 'London' },
      { label: 'Istanbul', value: 'Istanbul' },
      { label: 'Paris', value: 'Paris' },
      { label: 'Chicago', value: 'Chicago' },
      { label: 'East Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' },
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' },
      { label: 'Kyoto', value: 'Kyoto' },
      { label: 'Osaka', value: 'Osaka' },
      { label: 'Tokyo', value: 'Tokyo' },
      { label: 'Yokohama Yo Mama', value: 'Yokohama' },
    ];
  }

  ngOnInit(): void {}

  get email() {
    return this.varietyForm.get('email');
  }

  get age() {
    return this.varietyForm.get('age');
  }

  onSubmit() {
    console.log(this.varietyForm.value);

    alert('Submitted');
  }
}

interface City {
  label: string;
  value: string;
}
