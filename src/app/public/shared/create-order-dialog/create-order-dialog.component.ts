import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {RestaurantsContextService} from '@app/core/restaurants-context.service';
import {Router} from '@angular/router';
import {OrdersContextService} from '@app/core/orders-context.service';
import {Subject} from 'rxjs';
import {Restaurant} from '@models/restaurant.model';
import {Order} from '@models/order.model';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public chooseRestaurant(restaurant: Restaurant): void {
    this._ordersContext.postOrder({
      restaurantId: restaurant.id
    })
      .subscribe(
        (order: Order) => {
          this._router.navigate(['/', order.id, 'order']);
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
    this._destroy$.next();
  }
}
