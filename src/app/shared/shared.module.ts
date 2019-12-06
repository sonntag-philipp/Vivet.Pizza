import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantDialogComponent} from './restaurant-dialog/restaurant-dialog.component';
import {AppMaterialModule} from '../app-material.module';

@NgModule({
  declarations: [
    RestaurantDialogComponent
  ],
  exports: [
    RestaurantDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  entryComponents: [
    RestaurantDialogComponent
  ]
})
export class SharedModule {
}
