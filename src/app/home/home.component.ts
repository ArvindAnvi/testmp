import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <p>Welcome to the home page. This is the main landing page of the application.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
