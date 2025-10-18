import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mustard',
  template: '<p>Mustard works!</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MustardComponent {}
