import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order/order.component';
import {AppMaterialModule} from '../app-material.module';
import {FlexModule} from '@angular/flex-layout';
import {OrderTableComponent} from './order/order-table/order-table.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderTableComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AppMaterialModule,
    FlexModule
  ]
})
export class OrderModule { }
