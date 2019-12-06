import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SessionGuard} from '../core/guards/session.guard';

const routes: Route[] = [
  {
    path: "",
    component: IndexComponent,
    canActivate: [
      SessionGuard
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
