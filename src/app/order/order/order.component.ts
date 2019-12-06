import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../../shared/dish.model';
import {OrderService} from '../order.service';
import {Order} from '../shared/order.model';
import {MatDialog} from '@angular/material';
import {RestaurantDialogComponent} from '../../shared/restaurant-dialog/restaurant-dialog.component';

@Component({
  selector: 'vp-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
/*
  public order: Order = {
    id: "1",
    restaurant: {
      name: "Piccola Strada",
      dishes: [],
      id: "BKbzYFJQeYDsTWz16CpP",
      addresses: [
        {
          city: "Papenburg",
          code: "26871",
          phone: "04961 / 9856808",
          street: "Splitting links 10"
        }
      ]
    },
    dishes: [
      {
        id: "4",
        name: "Pizza Funghi",
        description: "Frischer Teig mit Pilzen",
        ingredients: ["Champignons, Tomatensoße"],
        options: [
          {
            name: "Zwiebeln"
          },
          {
            name: "Joghurtsauce"
          },
          {
            name: "Schnittlauch"
          }
        ],
        price: 5.00
      },
      {
        id: "26b",
        name: "Pizza Kebab",
        description: "Frischer Teig mit Fleisch vom Spieß",
        ingredients: ["Schweinefleisch, Tomatensoße", "Käse"],
        options: [
          {
            name: "Zwiebeln"
          },
          {
            name: "Tzatziki"
          },
          {
            name: "Ruccola"
          }
        ],
        price: 8.50
      },
    ]
  };*/

  constructor(private orderService: OrderService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openRestaurantDetails() {
  }
}
