import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.html',
  styleUrls: ['./tags.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {}
