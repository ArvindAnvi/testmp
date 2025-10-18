import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'all-resources',
        loadComponent: () => import('./all-resources/all-resources.component').then(m => m.AllResourcesComponent)
    },
    {
        path: 'favorites',
        loadComponent: () => import('./favorites/favorites.component').then(m => m.FavoritesComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
    },
    {
        path: 'project-1',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'project-2',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'project-3',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'project-4',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'project-5',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'project-6',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
