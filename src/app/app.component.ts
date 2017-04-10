import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>CN</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active">Home</a>
      </nav>
      <router-outlet></router-outlet>
    `,
})
export class AppComponent  {  }
