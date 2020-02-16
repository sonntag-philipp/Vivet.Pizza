import {Component, OnInit} from '@angular/core';
import {Order} from '@models/order.model';
import {OrdersContextService} from '@app/core/orders-context.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RestaurantDialogComponent} from '@models/restaurant-dialog/restaurant-dialog.component';
import {SessionService} from '@app/core/session.service';
import {MatDialog} from '@angular/material/dialog';

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
    private _route: ActivatedRoute,
    private _sessionService: SessionService
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        if (!!params.orderId) {
          this._ordersContext.getOrder(params.orderId).subscribe(
            (order: Order) => {
              this.order = order;
              this._sessionService.orderId = order.id;
            }
          );
        }
      }
    );
  }

  public openRestaurantDetails(): void {
    this._dialog.open(RestaurantDialogComponent, {
      data: this.order.restaurant
    });
  }
}
