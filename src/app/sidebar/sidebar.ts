
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  showSubMenu = signal(false);

  toggleSubMenu() {
    this.showSubMenu.set(!this.showSubMenu());
  }
}
