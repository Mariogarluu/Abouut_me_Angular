import { Routes } from '@angular/router';
import { HomrComponent } from './homr/homr.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homr', pathMatch: 'full' },
  { path: 'homr', component: HomrComponent },
  { path: 'aboutme', component: AboutmeComponent },
];
