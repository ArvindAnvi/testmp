import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  template: '<h1>All Resources</h1>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {}