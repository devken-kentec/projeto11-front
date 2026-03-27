
import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  { path: '', title: 'Home', loadComponent: ()=> import('./home/home.component').then((p)=> p.HomeComponent)},
];
