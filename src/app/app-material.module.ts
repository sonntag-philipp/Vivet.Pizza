import {NgModule} from '@angular/core';

import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
