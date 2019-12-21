import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Restaurant} from '../shared/restaurant.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsContextService implements OnDestroy{

  constructor(
    private _httpClient: HttpClient
  ) { }


  public getAvailableRestaurants(): Observable<Restaurant[]> {
    return this._httpClient
      .get<Restaurant[]>(environment.api.address + "/restaurants");
  }

  public ngOnDestroy(): void {
    console.log("Destroyed!");
  }
}
