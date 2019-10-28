import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = [
    { reg: '3198', model: '2000', name: 'Hundai' },
    { reg: '3199', model: '2010', name: 'Alentra' },
    { reg: '3200', model: '2011', name: 'Nissan GTR' },
    { reg: '3201', model: '1990', name: 'GMC' },
    { reg: '3204', model: '1999', name: 'Nissan SkyLine' }
  ];

  constructor() {}
  get getcars() {
    return this.cars;
  }
  getAllcars() {
    return this.cars;
  }

  AddCars(register: string, mode: string, nam: string) {
    this.cars.push({ reg: register, model: mode, name: nam });
  }

  AddCarsByObj(carObj) {
    this.cars.push(carObj);
  }

  /*AddCars(register: string , model: string , name: string) {
    this.cars.push({ reg: this.register , model, name
    });
  }*/

  deleteCars(reg: string) {
    this.cars = this.cars.filter(e => {
      return e.reg !== reg;
    });
  }
}
