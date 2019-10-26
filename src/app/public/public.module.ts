import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {AppMaterialModule} from '../app-material.module';
import {MatCardModule} from '@angular/material';
import {PublicRoutingModule} from './public-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatCardModule,
    PublicRoutingModule,
    FlexLayoutModule
  ]
})
export class PublicModule { }
