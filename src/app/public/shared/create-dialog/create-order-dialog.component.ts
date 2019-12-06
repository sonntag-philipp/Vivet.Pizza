import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Restaurant} from '../../../shared/restaurant.model';
import {RestaurantsContextService} from '../../../core/restaurants-context.service';
import {Router} from '@angular/router';
import {OrdersContextService} from '../../../core/orders-context.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Order} from '../../../order/shared/order.model';
import {SessionService} from '../../../core/session.service';

@Component({
  selector: 'vp-create-dialog',
  templateUrl: './create-order-dialog.component.html',
  styleUrls: ['./create-order-dialog.component.scss']
})
export class CreateOrderDialogComponent implements OnInit, OnDestroy {

  availableRestaurants: Restaurant[] = [];

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _router: Router,
    private _restaurantsContext: RestaurantsContextService,
    private _ordersContext: OrdersContextService,
    private _sessionService: SessionService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public chooseRestaurant(restaurant: Restaurant): void {
    this._ordersContext.postOrder(restaurant)
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(
        (order: Order) => {
          console.log(order);
          this._sessionService.orderId = order.id;
        }
      );
  }

  public ngOnInit(): void {
    this._restaurantsContext.getAvailableRestaurants().subscribe(
      (restaurants: Restaurant[]) => {
        this.availableRestaurants = restaurants;
      }
    );
  }

  public ngOnDestroy(): void {

  }
}
