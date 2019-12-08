import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {Dish} from '../../shared/dish.model';
import {Restaurant} from '../../shared/restaurant.model';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'vp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  private _onDestroy$: Subject<boolean>;
  public dishes$: Observable<Dish[]>;
  public restaurant$: Observable<Restaurant>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._onDestroy$ = new Subject<boolean>();

    this.route.params.subscribe(next => {
      this.initObservables(next.restaurantId);
    });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next(true);
  }

  private initObservables(restaurantId: string): void {
  }
}
