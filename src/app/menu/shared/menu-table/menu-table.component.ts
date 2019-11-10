import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Dish} from '../../../shared/dish.model';
import {MatTableDataSource} from '@angular/material';
import {map, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'vp-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit, OnDestroy {

  @Input() dishes: Observable<Dish[]>;

  public dataSource: MatTableDataSource<Dish>;
  private destroy$: Subject<void>;

  public displayedColumns: string[] = [
    'name',
    'description',
    'price'
  ];

  constructor() { }

  ngOnInit() {
    this.destroy$ = new Subject<void>();

    this.dishes
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(dishes => {
        this.dataSource = new MatTableDataSource<Dish>(dishes);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
