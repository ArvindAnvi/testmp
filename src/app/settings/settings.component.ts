import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <h1>Settings</h1>
    <p>This page will allow you to configure your application settings.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent { }
