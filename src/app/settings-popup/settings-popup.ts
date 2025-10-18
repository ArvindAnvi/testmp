
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.html',
  styleUrls: ['./settings-popup.css'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPopupComponent {
  close = output<void>();
}
