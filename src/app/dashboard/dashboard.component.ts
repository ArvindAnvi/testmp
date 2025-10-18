import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <p>This is the dashboard. It will contain a summary of important information.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent { }
