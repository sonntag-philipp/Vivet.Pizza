import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../shared/dish.model';
import {OrderService} from '../order.service';

@Component({
  selector: 'vp-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public dishes: Dish[] = [
    {
      name: "Pizza Funghi",
      description: "Frischer Teig mit Pilzen",
      ingredients: ["Champignons, Tomatensoße"],
      options: [
        {
          name: "Zwiebeln"
        }
      ],
      price: 5.00
    }
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

}
