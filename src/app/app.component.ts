import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <nav class="white">
        <a routerLink="/" routerLinkActive="active" style="color: #000000">Home</a>
      </nav>
      <div> </div>
      
      <router-outlet></router-outlet>
    `,
})
export class AppComponent  {  }
