import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cost-management',
  template: `
    <h1>Cost Management</h1>
    <p>This page will provide tools for managing your costs.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostManagementComponent { }
