
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  template: '<h1>Page 2</h1>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page2Component {}
