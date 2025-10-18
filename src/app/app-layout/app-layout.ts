import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent],
  templateUrl: './app-layout.html',
  styleUrls: ['./app-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent {}
