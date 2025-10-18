import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-resources',
  standalone: true,
  imports: [CommonModule],
  template: `<p>all-resources works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllResourcesComponent {}
