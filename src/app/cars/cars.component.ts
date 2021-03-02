import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent {

  inputText = '1234567890';
  carStatus = false;

  constructor() {

  }

  carAdd() {
    this.carStatus = true;
  }

  onKeyUp(value) {
    this.inputText = value;
  }

}
