import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home').then(m => m.HomeComponent) },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent) },
    { path: 'all-resources', loadComponent: () => import('./all-resources/all-resources').then(m => m.AllResourcesComponent) },
    { path: 'favorites', loadComponent: () => import('./favorites/favorites').then(m => m.FavoritesComponent) },
    { path: 'tags', loadComponent: () => import('./tags/tags').then(m => m.TagsComponent) },
    { path: 'organization', loadComponent: () => import('./organization/organization').then(m => m.OrganizationComponent) },
    { path: 'service-groups', loadComponent: () => import('./service-groups/service-groups').then(m => m.ServiceGroupsComponent) },
    { path: 'management-groups', loadComponent: () => import('./management-groups/management-groups').then(m => m.ManagementGroupsComponent) },
    { path: 'subscriptions', loadComponent: () => import('./subscriptions/subscriptions').then(m => m.SubscriptionsComponent) },
    { path: 'cost-management', loadComponent: () => import('./cost-management/cost-management').then(m => m.CostManagementComponent) },
    { path: 'settings', loadComponent: () => import('./settings/settings').then(m => m.SettingsComponent) },
];
