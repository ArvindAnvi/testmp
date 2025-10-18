import { Component } from '@angular/core';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@Component({
  selector: 'app-root',
  imports: [AppLayoutComponent],
  template: `<app-layout></app-layout>`,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'azure-portal-clone';
}
