import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CTOsComponent } from './pages/ctos/ctos.component';
import { ModelosComponent } from './pages/modelos/modelos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CTOsComponent, ModelosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cto-manager-front';
}
