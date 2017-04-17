import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
})
export class HomepageComponent  {

    constructor(private router: Router){}

    displaySearch(topicCode: string, ric: string, startTime: string, endTime: string){
        this.router.navigate(['/search'], {
            queryParams: { startTime: startTime, endTime: endTime, topicCode: topicCode, ric: ric}
        });
    }
}
