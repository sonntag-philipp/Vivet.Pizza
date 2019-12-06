import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme = "vp-mat-light-theme";

  constructor() {
  }
}
