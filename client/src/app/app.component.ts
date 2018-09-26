import { Component } from '@angular/core';

import { isElectron, launch } from './electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isElectron = isElectron;
  launch = launch;
}
