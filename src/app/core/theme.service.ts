import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public get darkMode(): boolean {
    return this._darkMode;
  }

  public set darkMode(value: boolean) {
    console.log(value);
    if (value) {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }
  }

  private _darkMode: boolean;

  constructor() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'vp-mat-light-theme') {
      this.setLightMode();
    }
    else {
      this.setDarkMode();
    }
  }

  public setDarkMode(): void {
    const body = document.querySelector('body');
    body.classList.remove(environment.themes.light);
    body.classList.add(environment.themes.dark);
    this._darkMode = true;
    localStorage.setItem('theme', environment.themes.dark);
  }

  public setLightMode(): void {
    const body = document.querySelector('body');
    body.classList.remove(environment.themes.dark);
    body.classList.add(environment.themes.light);
    this._darkMode = false;
    localStorage.setItem('theme', environment.themes.light);
  }
}
