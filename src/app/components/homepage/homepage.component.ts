import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NgModel, NgForm} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.css']
})
export class HomepageComponent  {

    // searchType: string[];
    currentSearch: string;
    searchTerms: DOMObject[];

    constructor(private router: Router){
        // this.searchType = ['RIC', 'Topic Code']
        // this.currentSearch = 'ric';
    }

    displaySearch(topicCode: string, ric: string, startTime: string, endTime: string){
        this.router.navigate(['/search'], {
            queryParams: { startTime: startTime, endTime: endTime, topicCode: topicCode, ric: ric}
        });
    }

    setCurrentSearch(terms: string){
        this.searchTerms[this.currentSearch] = terms[this.currentSearch];
        if(this.currentSearch === 'ric'){
            this.currentSearch = 'topic'
        } else {
            this.currentSearch = 'ric'
        }
    }

    onSubmit(start: string, end:string){
        var ric = [];
        var topic = [];

        for (var i in this.searchTerms){
            var current = this.searchTerms[i].value;
            // console.log(current)
            // match a ric
            var regexp = /[A-Z]{3}\..+/gi;
            if (current.match(regexp)){
                ric.push(current);
            } else {
                topic.push(current);
            }
        }
        this.displaySearch(topic.join(','), ric.join(','), start, end);
    }

}

interface DOMObject {
    display: string;
    value: string;
}
