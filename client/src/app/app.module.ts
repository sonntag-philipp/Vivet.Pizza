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
import {RestaurantsContextService} from './core/restaurants-context.service';
import {OrdersContextService} from './core/orders-context.service';
import {SessionService} from './core/session.service';
import {SessionGuard} from './core/guards/session.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {ThemeService} from './core/theme.service';

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
    MenuModule,
    OverlayModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ExceptionService,
    RestaurantsContextService,
    OrdersContextService,
    SessionService,
    SessionGuard,
    ThemeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
