
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  template: '<h1>Page 1</h1>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component {}
