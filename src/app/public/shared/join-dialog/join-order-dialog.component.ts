import {Component, Inject, OnDestroy} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Subject} from 'rxjs';
import {OrdersContextService} from '../../../core/orders-context.service';
import {Order} from '../../../order/shared/order.model';
import {Router} from '@angular/router';

@Component({
  selector: 'vp-join-dialog',
  templateUrl: './join-order-dialog.component.html',
  styleUrls: ['./join-order-dialog.component.scss']
})
export class JoinOrderDialogComponent implements OnDestroy {

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _ordersContext: OrdersContextService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public joinOrder(orderId: string): void {
    this._ordersContext.getOrder(orderId).subscribe(
      (order: Order) => {
        if (!!order.id) {
          console.log(order);
          this._router.navigate(['/', order.id, 'order']);
        }
      }
    );
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
  }
}
