import { Routes } from '@angular/router';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { CTOsComponent } from './pages/ctos/ctos.component';

export const routes: Routes = [
  { path: 'modelos', component: ModelosComponent },
  { path: 'ctos', component: CTOsComponent },
  { path: '', redirectTo: 'modelos', pathMatch: 'full' }
];