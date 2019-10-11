import { Injectable } from '@angular/core';
import {MenuModel} from './models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu: MenuModel;

  constructor() {
    this.menu = new MenuModel();
    this.menu.items = [
      {
        name: "Pizza Funghi",
        options: [
          {
            definition: "Groß",
            price: 7.5
          },
          {
            definition: "Mittel",
            price: 5
          }
        ],
        id: 4
      },
      {
        name: "Pizza Kebab",
        options: [
          {
            definition: "Groß",
            price: 7.5
          },
          {
            definition: "Mittel",
            price: 5
          }
        ],
        id: 4
      }
    ];
  }
}
