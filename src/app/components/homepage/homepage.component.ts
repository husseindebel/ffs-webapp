import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NgModel, NgForm} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

    // searchType: string[];
    currentSearch: string;
    searchTerms: Object;

    constructor(private router: Router){
        // this.searchType = ['RIC', 'Topic Code']
        this.currentSearch = 'ric';
        this.searchTerms = {
            "ric": "",
            "topic": ""
        }
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
    //
    // onSubmit(searchQuery: string){
    //     if (this.currentSearch === 'RIC'){
    //         this.displaySearch("", searchQuery, '2015-10-01', '2015-10-10')
    //     } else if (this.currentSearch === 'Topic Code'){
    //         this.displaySearch(searchQuery, "", '2015-10-01', '2015-10-10')
    //     }
    // }

    onSubmit(search: NgForm, start: string, end:string){
        console.log(this.searchTerms);
        console.log(start, end);
        this.displaySearch(this.searchTerms['topic'], this.searchTerms['ric'], start, end);
    }

}
