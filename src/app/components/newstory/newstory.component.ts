import { Component, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsService} from '../../services/newsdata.service';
import {OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'newstory',
    templateUrl: 'newstory.component.html',
    styleUrls: ['newstory.component.css'],
    providers: [NewsService]
})

export class NewsStoryComponent implements OnInit{

    story: NewsStory;
    currentSection: string;
    articleActive = true;
    statsActive = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: NewsService
    ){
        this.currentSection = 'article'
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
        console.log(story.NewsText);
        this.story = story
        var filter_ric = story.InstrumentIDs.map(function(elem){
            return elem.replace('RIC_', '')
        });
        console.log(filter_ric)
        var result = story.NewsText.replace(/<[A-Za-z0-9]+.[A-Za-z0-9]+>/g, '');
        // result= result.replace(/\s\s/, ' ');
        this.story.NewsText = result;
        this.story.InstrumentIDs = filter_ric;
    }

    changeStats(){
        this.currentSection = 'stats';
        this.articleActive = false;
        this.statsActive = true;
    }

    changeArticle(){
        this.currentSection = 'article';
        this.articleActive = true;
        this.statsActive = false;
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
