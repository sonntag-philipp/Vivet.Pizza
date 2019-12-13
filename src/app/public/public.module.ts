import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {AppMaterialModule} from '../app-material.module';
import {MatCardModule} from '@angular/material';
import {PublicRoutingModule} from './public-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from '../shared/shared.module';
import {JoinOrderDialogComponent} from './shared/join-order-dialog/join-order-dialog.component';
import {CreateOrderDialogComponent} from './shared/create-order-dialog/create-order-dialog.component';

@NgModule({
  declarations: [
    IndexComponent,
    NotFoundComponent,
    JoinOrderDialogComponent,
    CreateOrderDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatCardModule,
    PublicRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  entryComponents: [
    JoinOrderDialogComponent,
    CreateOrderDialogComponent
  ]
})
export class PublicModule {
}
