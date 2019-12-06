import {Component, HostBinding} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ThemeService} from './core/theme.service';

@Component({
  selector: 'vp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get theme(): string {
    return this._themeService.theme;
  }

  constructor(
    private _themeService: ThemeService
  ) {
  }
}
