import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu/menu.component';
import {AppMaterialModule} from '../app-material.module';
import {MenuTableComponent} from './shared/menu-table/menu-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    MenuComponent,
    MenuTableComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class MenuModule {
}
