import {Component} from '@angular/core';
import {ThemeService} from './core/theme.service';

@Component({
  selector: 'vp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _themeService: ThemeService
  ) {
  }
}
