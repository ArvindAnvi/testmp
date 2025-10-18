import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-management-groups',
  template: `
    <h1>Management Groups</h1>
    <p>This page will allow you to manage your management groups.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagementGroupsComponent { }
