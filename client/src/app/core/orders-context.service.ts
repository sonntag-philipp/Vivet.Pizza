import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../shared/restaurant.model';
import {Observable} from 'rxjs';
import {Order} from '../shared/order.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersContextService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public postOrder(order: Order): Observable<Order> {
    return this._httpClient.post<Order>(environment.api.address + "/orders", order);
  }

  public getOrder(orderId: number): Observable<Order> {
    return this._httpClient.get<Order>(environment.api.address + "/orders/" + orderId);
  }
}
