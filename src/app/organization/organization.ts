import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.html',
  styleUrls: ['./organization.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent {}
