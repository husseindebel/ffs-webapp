import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

    currentSearch: string;
    constructor(private router: Router){
        this.currentSearch = "RIC"
    }

    displaySearch(topicCode: string, ric: string, startTime: string, endTime: string){
        this.router.navigate(['/search'], {
            queryParams: { startTime: startTime, endTime: endTime, topicCode: topicCode, ric: ric}
        });
    }

    setCurrentSearch(search: string){
        this.currentSearch = search;
    }

    onSubmit(searchQuery: string){
        if (this.currentSearch === 'RIC'){
            this.displaySearch("", searchQuery, '2015-10-01', '2015-10-10')
        } else if (this.currentSearch === 'Topic Code'){
            this.displaySearch(searchQuery, "", '2015-10-01', '2015-10-10')
        }
    }


}
