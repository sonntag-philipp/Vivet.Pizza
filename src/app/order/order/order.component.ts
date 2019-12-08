import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {MatDialog} from '@angular/material';
import {Order} from '../shared/order.model';
import {OrdersContextService} from '../../core/orders-context.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RestaurantDialogComponent} from '../../shared/restaurant-dialog/restaurant-dialog.component';

@Component({
  selector: 'vp-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public order: Order = new Order();

  constructor(
    private _ordersContext: OrdersContextService,
    private _dialog: MatDialog,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        if (!!params.orderId) {
          this._ordersContext.getOrder(params.orderId).subscribe(
            (order: Order) => {
              this.order = order;
            }
          );
        }
      }
    );
  }

  public openRestaurantDetails(): void {
    console.log(this.order);
    this._dialog.open(RestaurantDialogComponent, {
      data: this.order.restaurant
    });
  }
}
