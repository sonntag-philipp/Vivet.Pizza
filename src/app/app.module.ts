import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ExceptionService} from './core/exception.service';
import {PublicModule} from './public/public.module';
import {OrderModule} from './order/order.module';
import {SharedModule} from './shared/shared.module';
import {MenuModule} from './menu/menu.module';

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
    OrderModule,
    SharedModule,
    MenuModule
  ],
  providers: [
    ExceptionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
