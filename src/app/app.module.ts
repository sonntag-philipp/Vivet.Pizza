import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule, MatDialogModule, MatInputModule, MatListModule, MatTableModule} from '@angular/material';
import {MenuService} from './shared/menu.service';
import {SelectionDialogComponent} from './menu/selection-dialog/selection-dialog.component';
import {FormsModule} from '@angular/forms';
import { MenuToolbarComponent } from './menu/menu-toolbar/menu-toolbar.component';
import { OrderComponent } from './order/order.component';
import {OrderService} from './shared/order.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    SelectionDialogComponent,
    MenuToolbarComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    MenuService,
    OrderService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SelectionDialogComponent
  ]
})
export class AppModule { }
