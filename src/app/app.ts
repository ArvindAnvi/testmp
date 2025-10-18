
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { MainContentComponent } from './main-content/main-content';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header />
      <div class="main-container">
        <app-sidebar />
        <app-main-content />
      </div>
    </div>
  `,
  imports: [HeaderComponent, SidebarComponent, MainContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
