import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/order.service';

@Component({
  selector: 'vp-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements OnInit {
  get id(): string {
    return this.orderService.id;
  }

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

}
