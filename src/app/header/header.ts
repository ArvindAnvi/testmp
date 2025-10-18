
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SettingsPopupComponent } from '../settings-popup/settings-popup';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [SettingsPopupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  showSettingsPopup = signal(false);

  toggleSettingsPopup() {
    this.showSettingsPopup.set(!this.showSettingsPopup());
  }
}
