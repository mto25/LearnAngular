import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'someTitle';
  firstName = 'Mto';
  constructor() {
    // tslint:disable-next-line
    let i = 0;
  }
}
