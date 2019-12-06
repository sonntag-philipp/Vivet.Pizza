import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../shared/restaurant.model';
import {Observable} from 'rxjs';
import {Order} from '../order/shared/order.model';
import {environment} from '../../environments/environment';
import {takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersContextService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public postOrder(restaurant: Restaurant): Observable<Order> {
    return this._httpClient.post<Order>(environment.api.address + "/orders", restaurant);
  }

  public getOrder(restaurantId: string): Observable<Order> {
    return this._httpClient.get<Order>(environment.api.address + "/orders/" + restaurantId);
  }
}
