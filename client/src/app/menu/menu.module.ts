import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu/menu.component';
import {AppMaterialModule} from '../app-material.module';
import {MenuTableComponent} from './shared/menu-table/menu-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddDishDialogComponent} from './shared/add-dish-dialog/add-dish-dialog.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuTableComponent,
    AddDishDialogComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    AddDishDialogComponent
  ]
})
export class MenuModule {
}
