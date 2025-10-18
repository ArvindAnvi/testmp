import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {}
