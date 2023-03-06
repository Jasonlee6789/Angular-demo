import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hanjin() {
    alert('lijingaiiii');
  }
  title = 'lijing-app';
  name = 'lijing';
}
