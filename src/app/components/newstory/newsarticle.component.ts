import { Component, ViewContainerRef, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsService} from '../../services/newsdata.service';
import {OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'newsarticle',
    templateUrl: 'newsarticle.component.html',
    styleUrls: ['newsarticle.component.css'],
    // providers: [NewsService]
})

export class NewsArticleComponent {
      @Input() story: NewsStory;
}

interface NewsStory {
    TopicCode: string[];
    InstrumentIDs: string[];
    Headline: string;
    Date: string;
    NewsText: string;
    logfile: Object;
}
