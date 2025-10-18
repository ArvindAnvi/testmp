import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  template: `
    <h1>Subscriptions</h1>
    <p>This page will allow you to manage your subscriptions.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionsComponent { }
