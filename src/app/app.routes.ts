import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'client', loadComponent: () => import('./modules/client/client.component').then(c => c.ClientComponent) },
    { path: 'about', loadComponent: () => import('./modules/about/about.component').then(c => c.AboutComponent) },
    { path: '',   redirectTo: 'client', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
