import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent,CommonModule], // RouterOutlet],
  // template: `
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-begin';
}

