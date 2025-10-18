import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-service-groups',
  template: `
    <h1>Service Groups</h1>
    <p>This page will allow you to manage your service groups.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceGroupsComponent { }
