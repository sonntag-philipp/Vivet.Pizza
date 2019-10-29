import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../dish.model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'vp-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() dishes: Dish[] = [];

  public displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'ingredients'
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

}
