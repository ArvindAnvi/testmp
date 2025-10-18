import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { path: '/home', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/all-resources', label: 'All Resources' },
    { path: '/favorites', label: 'Favorites' },
    { path: '/organization', label: 'Organization' },
    { path: '/settings', label: 'Settings' },
    { path: '/cost-management', label: 'Cost Management' },
    { path: '/management-groups', label: 'Management Groups' },
    { path: '/service-groups', label: 'Service Groups' },
    { path: '/subscriptions', label: 'Subscriptions' },
    { path: '/tags', label: 'Tags' },
  ]);
}
