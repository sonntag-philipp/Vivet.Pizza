import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Route[] = [
  {
    path: "",
    component: IndexComponent
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
