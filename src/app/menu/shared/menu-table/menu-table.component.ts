import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Dish} from '../../../shared/dish.model';
import {MatCheckboxChange, MatDialog, MatTableDataSource} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';
import {AddDishDialogComponent} from '../add-dish-dialog/add-dish-dialog.component';

@Component({
  selector: 'vp-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit, OnDestroy {

  @Input() dishes: Observable<Dish[]>;

  public dataSource: MatTableDataSource<Dish>;
  public selection = new SelectionModel<Dish>(true, []);
  private destroy$: Subject<void>;

  public displayedColumns: string[] = [
    'select',
    'name',
    'description',
    'price'
  ];

  constructor(
    private dialog: MatDialog
  ) {
  }

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

  public dishSelected(row: Dish, event: MatCheckboxChange): void {
    this.selection.toggle(row);
    if (event.checked) {
      this.dialog.open(AddDishDialogComponent, {
        data: row
      }).afterClosed().subscribe(
        dish => {
          console.log(dish);
          if (dish === undefined) {
            event.source.checked = false;
          }
        }
      );
    }
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
