import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cost-management',
  templateUrl: './cost-management.html',
  styleUrls: ['./cost-management.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostManagementComponent { }