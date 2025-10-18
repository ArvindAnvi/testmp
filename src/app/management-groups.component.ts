import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-management-groups',
  standalone: true,
  imports: [CommonModule],
  template: `<p>management-groups works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementGroupsComponent {}
