import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatDialogModule, MatInputModule, MatListModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ExceptionService} from './core/exception.service';
import {PublicModule} from './public/public.module';
import {OrderModule} from './order/order.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PublicModule,
    OrderModule
  ],
  providers: [
    ExceptionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
