import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  template: `
    <h1>Organization</h1>
    <p>This page will display information about your organization.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent { }
