import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.component')
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
