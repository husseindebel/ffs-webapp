import { Component } from '@angular/core';

@Component({
  selector: 'homepage',
  template: `<h1>Hello {{name}}</h1>`,
})
export class HomepageComponent  {
    name = 'Angular';
}
