import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {MenuComponent} from './menu/menu.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'menu/:id',
    component: MenuComponent
  },
  {
    path: 'order/:id',
    component: OrderComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
