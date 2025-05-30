import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './common-pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/dashboard/dashboard.component').then((c) => c.DashboardComponent)
  },
  {
    path: 'clients',
    loadComponent: () => import('./modules/client/client.component').then((c) => c.ClientComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/about/about.component').then((c) => c.AboutComponent)
  },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
