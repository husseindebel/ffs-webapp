import { Component } from '@angular/core';
import {News} from '../News';
import {DisplayDataService} from '../services/displaydata.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'newsdisplay',
    templateUrl: 'newsdisplay.template.html',
})
export class NewsDisplayComponent  {

    currentNews: News;

    constructor(public dataservice: DisplayDataService, private route: ActivatedRoute) {
    }


    ngOnInit() {
        console.log(this.dataservice.news);
        this.currentNews = this.dataservice.news;
        console.log(this.currentNews);
    }


}
