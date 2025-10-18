import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-all-resources',
  template: `
    <h1>All Resources</h1>
    <p>This page will display a list of all available resources.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllResourcesComponent { }
