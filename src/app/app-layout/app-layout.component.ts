import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, NavMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="layout">
      <div class="menu-container" [class.is-open]="isMenuOpen()">
        <app-nav-menu (menuItemClicked)="closeMenu()"></app-nav-menu>
      </div>
      <main class="main-content">
        <header class="main-header">
          <button class="menu-toggle" (click)="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#333"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </button>
          <span class="header-title">My App</span>
        </header>
        <div class="content-wrapper">
            <router-outlet></router-outlet>
        </div>
      </main>
      @if (isMenuOpen() && isMobile()) {
        <div class="overlay" (click)="toggleMenu()"></div>
      }
    </div>
  `,
  styles: [`
    :host {
      --menu-width: 260px;
      --header-height: 60px;
      --transition-speed: 0.3s;
    }

    .layout {
      display: flex;
      height: 100vh;
      background-color: #f9f9f9;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-right: 15px;
    }
    
    .menu-toggle svg {
        fill: #333;
        width: 30px;
        height: 30px;
    }

    .menu-container {
      width: var(--menu-width);
      flex-shrink: 0;
      background-color: #fff;
      transition: transform var(--transition-speed) ease, 
                  width var(--transition-speed) ease;
      z-index: 1000;
      height: 100vh;
    }

    .main-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }
    
    .main-header {
        height: var(--header-height);
        display: flex;
        align-items: center;
        padding: 0 24px;
        border-bottom: 1px solid #e0e0e0;
        background-color: #fff;
        flex-shrink: 0;
    }

    .header-title {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .content-wrapper {
      flex-grow: 1;
      overflow-y: auto;
      padding: 24px;
      height: calc(100vh - var(--header-height));
    }

    .overlay {
      display: none;
    }

    /* Tablet and Mobile styles */
    @media (max-width: 992px) {
      .menu-toggle {
        display: block;
      }

      .menu-container {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transform: translateX(-100%);
        box-shadow: 4px 0 15px rgba(0,0,0,0.1);
      }

      .menu-container.is-open {
        transform: translateX(0);
      }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 999;
        display: block;
      }

      .main-content {
        width: 100%;
      }
    }
  `]
})
export class AppLayoutComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    if (this.isMobile()) {
      this.isMenuOpen.set(false);
    }
  }

  isMobile(): boolean {
    return window.innerWidth <= 992;
  }
}
