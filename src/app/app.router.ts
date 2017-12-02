// import { MainPage } from './../pages/main/main';
import { Routes } from '@angular/router';
// import { AdoptionComponent } from './adoption/adoption.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    loadChildren: 'pages/login/login.module#LoginModule'
  },
  {
    path: 'main',
    loadChildren: '../pages/main/main.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];
