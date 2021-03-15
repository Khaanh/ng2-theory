import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

  @Output('addCar') carEmmiter = new EventEmitter<{name: string, year: number}>();
  
  carName = '';
  carYear = 2017;
  
  addCar() {
    this.carEmmiter.emit({
      name: this.carName,
      year: this.carYear,
    });
    
    this.carName = '';
    this.carYear = 2017;
  }
}
