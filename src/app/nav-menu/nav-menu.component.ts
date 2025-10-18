import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterModule, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="nav-menu">
      <div class="logo-container">
        <img src="assets/logo.svg" alt="App Logo" class="logo">
        <span class="app-title">My App</span>
      </div>
      <nav class="navigation-links">
        <a routerLink="/" (click)="onLinkClick()" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active-link">Home</a>
        <a routerLink="/about" (click)="onLinkClick()" routerLinkActive="active-link">About</a>
        <div class="sub-menu-container" [class.open]="isSubMenuOpen()">
          <a (click)="toggleSubMenu()" [class.active-link]="isSubMenuOpen()" class="sub-menu-toggle">
            <span class="menu-icon">🌭</span>
            <span class="menu-text">Hot Dog</span>
            <span class="sub-menu-arrow"></span>
          </a>
          <div class="sub-menu">
            <a routerLink="/ketchup" (click)="onLinkClick()" routerLinkActive="active-link">Ketchup</a>
            <a routerLink="/mustard" (click)="onLinkClick()" routerLinkActive="active-link">Mustard</a>
          </div>
        </div>
        <a routerLink="/all-resources" (click)="onLinkClick()" routerLinkActive="active-link">All Resources</a>
        <a routerLink="/favorites" (click)="onLinkClick()" routerLinkActive="active-link">Favorites</a>
        <a routerLink="/settings" (click)="onLinkClick()" routerLinkActive="active-link">Settings</a>
        <a routerLink="/project-1" (click)="onLinkClick()" routerLinkActive="active-link">Project 1</a>
        <a routerLink="/project-2" (click)="onLinkClick()" routerLinkActive="active-link">Project 2</a>
        <a routerLink="/project-3" (click)="onLinkClick()" routerLinkActive="active-link">Project 3</a>
        <a routerLink="/project-4" (click)="onLinkClick()" routerLinkActive="active-link">Project 4</a>
        <a routerLink="/project-5" (click)="onLinkClick()" routerLinkActive="active-link">Project 5</a>
        <a routerLink="/project-6" (click)="onLinkClick()" routerLinkActive="active-link">Project 6</a>
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
      background-color: #ffffff;
      padding: 24px;
      border-right: 1px solid #e0e0e0;
      box-sizing: border-box; /* Ensures padding is included in height */
    }

    .logo-container {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      padding: 0 10px;
      flex-shrink: 0;
    }

    .logo {
      height: 40px;
      margin-right: 15px;
    }

    .app-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
    }

    .navigation-links {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      flex-grow: 1;
      min-height: 0; /*  flexbox scroll fix */
    }
    
    /* Custom Scrollbar Styling */
    .navigation-links::-webkit-scrollbar {
      width: 8px;
    }

    .navigation-links::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    .navigation-links::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }

    .navigation-links::-webkit-scrollbar-thumb:hover {
      background: #aaa;
    }

    .navigation-links a {
      text-decoration: none;
      color: #555;
      padding: 15px 20px;
      border-radius: 8px;
      margin-bottom: 8px;
      font-weight: 500;
      transition: background-color 0.2s ease, color 0.2s ease;
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }

    .navigation-links a:hover {
      background-color: #f4f4f4;
      color: #007bff;
    }

    .navigation-links a.active-link {
      background-color: #e6f2ff;
      color: #007bff;
      font-weight: 600;
    }

    .sub-menu-container .sub-menu-toggle {
      justify-content: space-between;
      cursor: pointer;
    }

    .menu-icon {
      margin-right: 10px;
    }

    .sub-menu-arrow {
      border: solid #555;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      transition: transform 0.3s ease;
    }

    .sub-menu-container.open .sub-menu-arrow {
      transform: rotate(-135deg);
    }

    .sub-menu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      padding-left: 20px;
    }

    .sub-menu-container.open .sub-menu {
      max-height: 500px; /* Adjust as needed */
    }
  `]
})
export class NavMenuComponent {
  menuItemClicked = output<void>();
  isSubMenuOpen = signal(false);

  onLinkClick() {
    this.menuItemClicked.emit();
  }

  toggleSubMenu() {
    this.isSubMenuOpen.set(!this.isSubMenuOpen());
  }
}
