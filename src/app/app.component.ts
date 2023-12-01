import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GokberkComponent } from './gokberk-component/gokberk-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GokberkComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gokberk-demo';
}
