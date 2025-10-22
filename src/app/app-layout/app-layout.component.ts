import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, NavMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-layout">
      <header class="app-header">
        <div class="header-left">
            <button class="menu-toggle" (click)="toggleMenu()">☰</button>
            <h1>AzureClone</h1>
        </div>
        <div class="header-center">
            <div class="search-container">
                <span class="search-icon">🔍</span>
                <input type="text" placeholder="Search resources, services, and docs" [value]="searchTerm()" (input)="onSearch($event)">
                @if (searchTerm()) {
                  <button class="clear-search-button" (click)="clearSearch()">×</button>
                }
            </div>
        </div>
        <div class="header-right">
            <button class="header-icon" title="Settings">⚙️</button>
            <button class="header-icon" title="Feedback">💬</button>
            <button class="header-icon" title="Notifications">🔔</button>
            <div class="user-profile">
                <img src="https://via.placeholder.com/30" alt="User Avatar">
                <div class="user-info">
                  <span class="user-name">User Name</span>
                  <span class="user-email">user@example.com</span>
                </div>
            </div>
        </div>
      </header>
      <main class="app-main">
        <app-nav-menu 
            [isCollapsed]="isMenuCollapsed()" 
            (menuItemClicked)="onMenuItemClicked()"
            [searchTerm]="searchTerm()" />
        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .app-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .app-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      background-color: #0078d4;
      color: white;
      height: 50px;
      flex-shrink: 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    
    .header-left, .header-center, .header-right {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .header-left {
        flex: 1 0 auto;
    }
    
    .header-center {
        flex: 2 1 auto;
        justify-content: center;
    }

    .header-right {
        flex: 1 0 auto;
        justify-content: flex-end;
    }

    .menu-toggle {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
    }

    h1 {
      font-size: 1.25rem;
      margin: 0;
      font-weight: 600;
    }

    .search-container {
        position: relative;
        width: 100%;
        max-width: 600px;
    }

    .search-container input {
        width: 100%;
        padding: 8px 40px;
        border-radius: 4px;
        border: 1px solid #005a9e;
        background-color: #005a9e;
        color: white;
        font-size: 0.9rem;
        transition: background-color 0.2s ease-in-out;
    }
    
    .search-container input:focus {
        background-color: #fff;
        color: #333;
        outline: none;
    }

    .search-container input::placeholder {
        color: #a0c7e8;
    }

    .search-icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #a0c7e8;
        z-index: 1;
    }
    
    input:focus ~ .search-icon {
        color: #333;
    }

    .clear-search-button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #a0c7e8;
        font-size: 1.2rem;
        cursor: pointer;
        line-height: 1;
    }
    input:focus ~ .clear-search-button {
        color: #555;
    }
    
    .header-icon {
      background: none;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 5px;
      border-radius: 50%;
      transition: background-color 0.2s ease;
    }

    .header-icon:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .user-profile {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .user-profile img {
        border-radius: 50%;
        margin-right: 8px;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
    }

    .user-name {
        font-weight: 600;
    }

    .user-email {
        font-size: 0.8rem;
        color: #d0e8f9;
    }

    .app-main {
      display: flex;
      flex-grow: 1;
      overflow: hidden;
    }

    .main-content {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px;
      background-color: #f2f2f2;
    }
  `]
})
export class AppLayoutComponent {
  isMenuCollapsed = signal(false);
  searchTerm = signal('');

  toggleMenu() {
    this.isMenuCollapsed.update(v => !v);
  }
  
  onSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  clearSearch() {
    this.searchTerm.set('');
  }

  onMenuItemClicked() {
    if (window.innerWidth < 768) { 
      this.isMenuCollapsed.set(true);
    }
  }
}
