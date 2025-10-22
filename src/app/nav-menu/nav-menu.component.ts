import { ChangeDetectionStrategy, Component, output, signal, input, computed } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  routerLink?: string;
  icon?: string;
  items?: NavItem[];
}

@Component({
  selector: 'app-nav-menu',
  imports: [RouterModule, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="nav-menu" [class.is-collapsed]="isCollapsed()">
        <div class="menu-header">
            @if (!isCollapsed()) {
              <span class="menu-title">Menu</span>
              <button (click)="toggleAll()" class="collapse-all-button" [class.is-open]="areAnyOpen()" title="Toggle all sections">
                  <span class="icon">^</span>
              </button>
            }
        </div>
      <nav class="navigation-links">
        @for (item of filteredMenuItems(); track item.label) {
          @if (item.items) {
            <div class="nested-menu">
                <a (click)="toggleMenuSection(item.label)" class="nested-menu-toggle" [class.open]="isMenuSectionOpen(item.label)">
                    @if (!isCollapsed()) {
                        <span class="chevron"></span>
                        <span class="menu-text">{{ item.label }}</span>
                    } @else {
                        <span class="menu-icon" [title]="item.label">{{ item.icon }}</span>
                    }
                </a>
                @if (!isCollapsed() && isMenuSectionOpen(item.label)) {
                    <div class="sub-links">
                        @for (subItem of item.items; track subItem.label) {
                            <a [routerLink]="subItem.routerLink" (click)="onLinkClick()" routerLinkActive="active-link">{{ subItem.label }}</a>
                        }
                    </div>
                }
            </div>
          } @else {
            <a [routerLink]="item.routerLink" (click)="onLinkClick()" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active-link" [title]="isCollapsed() ? item.label : ''">
                <span class="menu-icon">{{ item.icon }}</span>
                @if (!isCollapsed()) { <span class="menu-text">{{ item.label }}</span> }
            </a>
          }
          @if (item.label === 'Tags') { <div class="separator"></div> }
        }
        @if (filteredMenuItems().length === 0) {
          <div class="no-results">No results found</div>
        }
      </nav>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #f8f9fa;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      width: 250px;
      border-right: 1px solid #e0e0e0;
    }
    
    .nav-menu.is-collapsed {
      width: 50px;
    }
    
    .menu-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      height: 50px;
      border-bottom: 1px solid #e0e0e0;
      flex-shrink: 0;
    }

    .menu-title {
        font-weight: 600;
        font-size: 1rem;
    }

    .collapse-all-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        color: #333;
        padding: 0;
        line-height: 1;
        transition: transform 0.2s ease-in-out;
    }
    
    .collapse-all-button .icon {
        display: inline-block;
        transform: rotate(0deg);
        transition: transform 0.3s ease-in-out;
    }

    .collapse-all-button.is-open .icon {
        transform: rotate(180deg);
    }

    .navigation-links {
      flex-grow: 1;
      overflow-y: auto;
      padding-top: 10px;
    }

    .navigation-links a {
      text-decoration: none;
      color: #333;
      padding: 10px 15px;
      border-left: 3px solid transparent;
      font-weight: 500;
      transition: background-color 0.2s ease, color 0.2s ease, border-left-color 0.2s ease;
      display: flex;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;
    }
    
    .nav-menu.is-collapsed .navigation-links a {
        justify-content: center;
        padding: 10px 0;
    }

    .navigation-links a:hover {
      background-color: #e9ecef;
      color: #0078d4;
    }

    .navigation-links a.active-link {
      background-color: #e1f0ff;
      color: #0078d4;
      border-left-color: #0078d4;
      font-weight: 600;
    }
    
    .nav-menu.is-collapsed .navigation-links a.active-link {
        border-left-color: transparent;
    }

    .menu-icon {
      margin-right: 10px;
      width: 20px;
      text-align: center;
      font-size: 1.1rem;
    }
    
    .nav-menu.is-collapsed .menu-icon {
        margin-right: 0;
    }
    
    .nav-menu.is-collapsed .menu-text {
      display: none;
    }

    .separator {
        height: 1px;
        background-color: #dee2e6;
        margin: 10px 15px;
    }
    
    .nested-menu-toggle {
        justify-content: flex-start;
    }

    .chevron {
        border: solid #333;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
        transition: transform 0.3s ease-in-out;
        margin-right: 12px;
        margin-left: 5px;
    }
    
    .nested-menu-toggle.open .chevron {
        transform: rotate(-135deg);
    }

    .sub-links {
        padding-left: 20px;
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.3s ease-in-out;
    }
    
    .nested-menu-toggle.open + .sub-links {
      max-height: 500px;
    }

    .sub-links a {
        padding-left: 38px;
        font-weight: 400;
        color: #555;
    }
    
    .no-results {
      padding: 15px;
      text-align: center;
      color: #777;
    }

    .nav-menu.is-collapsed .menu-header {
      padding: 0;
      justify-content: center;
    }
  `]
})
export class NavMenuComponent {
  isCollapsed = input<boolean>(false);
  searchTerm = input<string>('');
  menuItemClicked = output<void>();
  openSections = signal<string[]>([]);

  menuItems = signal<NavItem[]>([
    { label: 'Resource Manager', routerLink: '/', icon: '⚿' },
    { label: 'All resources', routerLink: '/all-resources', icon: '🗂️' },
    { label: 'Favorite resources', routerLink: '/favorites', icon: '⭐' },
    { label: 'Resource groups', routerLink: '/resource-groups', icon: '📁' },
    { label: 'Tags', routerLink: '/tags', icon: '🏷️' },
    {
      label: 'Organization',
      icon: '🏢',
      items: [
        { label: 'Service groups', routerLink: '/service-groups' },
        { label: 'Management groups', routerLink: '/management-groups' },
        { label: 'Subscriptions', routerLink: '/subscriptions' },
      ],
    },
    {
      label: 'Tools',
      icon: '🔧',
      items: [
        { label: 'Resource graph explorer', routerLink: '/graph-explorer' },
        { label: 'Resource graph queries', routerLink: '/graph-queries' },
        { label: 'Resource visualizer', routerLink: '/visualizer' },
      ],
    },
  ]);

  filteredMenuItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.menuItems();
    }

    const filteredItems: NavItem[] = [];

    for (const item of this.menuItems()) {
      if (item.label.toLowerCase().includes(term)) {
        filteredItems.push(item);
      } else if (item.items) {
        const matchingChildren = item.items.filter(child => child.label.toLowerCase().includes(term));
        if (matchingChildren.length > 0) {
          filteredItems.push({ ...item, items: matchingChildren });
        }
      }
    }
    
    if (term) {
      const openOnFilter = filteredItems
          .filter(i => i.items && i.items.length > 0)
          .map(i => i.label);
      this.openSections.set(openOnFilter);
    }

    return filteredItems;
  });

  areAnyOpen = computed(() => this.openSections().length > 0);

  onLinkClick() {
    this.menuItemClicked.emit();
  }

  isMenuSectionOpen(label: string): boolean {
    return this.openSections().includes(label);
  }

  toggleMenuSection(label: string) {
    if (this.isCollapsed()) return;

    this.openSections.update(sections => {
        const index = sections.indexOf(label);
        if (index > -1) {
            return [...sections.slice(0, index), ...sections.slice(index + 1)];
        } else {
            return [...sections, label];
        }
    });
  }

  toggleAll() {
    if (this.areAnyOpen()) {
      this.openSections.set([]);
    } else {
      const allSectionLabels = this.menuItems().filter(i => i.items).map(i => i.label);
      this.openSections.set(allSectionLabels);
    }
  }
}
