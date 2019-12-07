import {Component} from '@angular/core';
import {MatDialog, MatSlideToggle} from '@angular/material';
import {JoinOrderDialogComponent} from '../shared/join-dialog/join-order-dialog.component';
import {Router} from '@angular/router';
import {CreateOrderDialogComponent} from '../shared/create-dialog/create-order-dialog.component';
import {SessionService} from '../../core/session.service';
import {ThemeService} from '../../core/theme.service';

@Component({
  selector: 'vp-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  public get lastOrderExits(): boolean {
    return this._sessionService.sessionActive;
  }

  public get lastOrderId(): string {
    return this._sessionService.orderId;
  }

  public get darkModeActive(): boolean {
    return this._themeService.darkMode;
  }

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _sessionService: SessionService,
    private _themeService: ThemeService
  ) {
  }

  public joinOrder(): void {
    this._dialog.open(JoinOrderDialogComponent, {});
  }

  public createOrder(): void {
    this._dialog.open(CreateOrderDialogComponent, {});
  }

  public toggleDarkMode(darkModeToggle: MatSlideToggle): void {
    this._themeService.darkMode = !this._themeService.darkMode;
  }

  public getLogoResource(darkmode: boolean) {
    return darkmode ? 'assets/img/logo_light.svg' : 'assets/img/logo.svg';
  }

  public openLastOrder(): void {
    if (this._sessionService.sessionActive) {
      this._router.navigate(['/', this._sessionService.orderId, 'order']);
    }

  }
}
