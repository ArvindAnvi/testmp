import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  template: `
    <h1>Tags</h1>
    <p>This page will allow you to manage your tags.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent { }
