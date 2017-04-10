import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'homepage',
    templateUrl: 'homepage.template.html',
})
export class HomepageComponent  {

    constructor(private router: Router){}

    displaySearch(searchQuery: string){
        this.router.navigate(['/search', searchQuery]);
    }
}
