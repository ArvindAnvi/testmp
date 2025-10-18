import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-groups',
  standalone: true,
  imports: [CommonModule],
  template: `<p>service-groups works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceGroupsComponent {}
