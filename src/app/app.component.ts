import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './master/master.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular app';
}
