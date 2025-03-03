import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent], // RouterOutlet],
  // template: `
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-begin';
}

