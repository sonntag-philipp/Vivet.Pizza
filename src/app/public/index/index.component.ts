import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {JoinOrderDialogComponent} from '../shared/join-dialog/join-order-dialog.component';
import {Router} from '@angular/router';
import {CreateOrderDialogComponent} from '../shared/create-dialog/create-order-dialog.component';
import {SessionService} from '../../core/session.service';

@Component({
  selector: 'vp-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _sessionService: SessionService
  ) { }

  public joinOrder(): void {
    this._dialog.open(JoinOrderDialogComponent, {}).afterClosed().subscribe(
      next => {
        this._router.navigate(['/', next, 'order']);
      }
    );
  }

  public createOrder(): void {
    this._dialog.open(CreateOrderDialogComponent, {});
  }
}
