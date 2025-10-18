import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ketchup',
  template: '<p>Ketchup works!</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KetchupComponent {}
