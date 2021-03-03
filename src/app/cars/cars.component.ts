import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent {

  inputText = '';
  carStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Tesla', 'Toyota'];
  items = [{ id: 3, name: 'item-1' }, { id: 6, name: 'item-2' }, { id: 9, name: 'item-3' }];
  dates = [
    new Date(2000, 12, 5).toDateString(),
    new Date(2021, 2, 29).toDateString(),
    new Date(2012, 3, 10).toDateString(),
    new Date(2011, 8, 9).toDateString(),
  ]

  constructor() {}

  carAdd() {
    this.carStatus = true;
    this.cars.push(this.inputText);
    this.inputText = '';
  }

  onKeyUp(value) {
    this.inputText = value;
  }

}
