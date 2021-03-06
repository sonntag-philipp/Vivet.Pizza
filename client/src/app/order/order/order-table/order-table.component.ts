import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../../../shared/dish.model';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'vp-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() dishes: Dish[] = [];

  private layoutChanges$: Observable<BreakpointState>;

  public displayedColumns: string[] = [
    'name',
    'options',
    'price'
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.layoutChanges$ = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]);

    this.layoutChanges$
      .subscribe((state: BreakpointState) => {
        if (!state.matches && this.displayedColumns.length > 3) {
          this.displayedColumns.pop();
        }
        else if (this.displayedColumns.length === 3 && state.matches) {
          this.displayedColumns.push('description');
        }
      }
    );
  }

}
