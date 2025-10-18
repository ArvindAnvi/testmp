
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header />
      <div class="main-container">
        <app-sidebar />
        <router-outlet />
      </div>
    </div>
  `,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
