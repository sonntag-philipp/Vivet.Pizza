import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from './order/order.component';
import {AppMaterialModule} from '../app-material.module';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AppMaterialModule,
    FlexModule
  ]
})
export class OrderModule { }
