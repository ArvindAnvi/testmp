import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-all-resources',
  templateUrl: './all-resources.html',
  styleUrls: ['./all-resources.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllResourcesComponent {}
