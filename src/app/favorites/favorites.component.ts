import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  template: `
    <h1>Favorites</h1>
    <p>This page will display a list of your favorite resources.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent { }
