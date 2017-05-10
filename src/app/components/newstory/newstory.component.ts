import { Component, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsService} from '../../services/newsdata.service';
import {OnInit} from '@angular/core';
// import {CompanypageComponent} from '../companypage/companypage.component';

@Component({
    moduleId: module.id,
    selector: 'newstory',
    templateUrl: 'newstory.component.html',
    styleUrls: ['./newstory.component.css'],
    providers: [NewsService]
})

export class NewsStoryComponent implements OnInit{

    story: NewsStory;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: NewsService
    ){

    }

    ngOnInit(){
        this.route.queryParams
            .switchMap((params: Params) => this.service.getNewsbyHeadline(
                params['headline']))
            .subscribe(
                (story) => this.formatResults(story)
            );
    }

    formatResults(story){
        // console.log(story.NewsText);
        this.story = story
    }

    displayCompany(ric){
        console.log("hussein");
        this.router.navigate(['/company'], {
            queryParams: { ric: ric }
        });
    }
}

interface NewsStory {
    TopicCode: string[];
    InstrumentIDs: string[];
    Headline: string;
    Date: string;
    NewsText: string;
    logfile: Object;
}
