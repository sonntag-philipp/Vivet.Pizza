import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public get darkMode(): boolean {
    return this._darkMode;
  }

  public set darkMode(value: boolean) {
    const body = document.querySelector('body');
    if (value) {
      body.classList.remove('vp-mat-light-theme');
      body.classList.add('vp-mat-dark-theme');
      this._darkMode = true;
    } else {
      body.classList.replace('vp-mat-dark-theme', 'vp-mat-light-theme');
      this._darkMode = false;
    }
  }

  private _darkMode: boolean;

  constructor() {
  }
}
