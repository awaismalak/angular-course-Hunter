import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <!-- This is footer container start -->
    <app-footer></app-footer>
    

  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';

constructor(){}
ngOnInit(){
  
}

}
