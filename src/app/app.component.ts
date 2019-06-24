import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet></router-outlet>
    <!-- This is footer container start -->
    <app-footer></app-footer>
    

  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
