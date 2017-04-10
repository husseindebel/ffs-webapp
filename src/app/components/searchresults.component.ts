import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NewsService } from '../services/newsdata.service';
import {DisplayDataService} from '../services/displaydata.service';
import {News} from '../News'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'searchresults.template.html',
    providers: [NewsService, DisplayDataService],
})
export class SearchResultComponent implements OnInit {
    news: News[];
    currentStory: News;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: NewsService,
      private dataservice: DisplayDataService,
    ) { }

    ngOnInit() {
        this.route.params
          .switchMap((params: Params) => this.service.getNews(params['id']))
          .subscribe((news: News) => this.news = news);
    }

    displayData(article){
        this.dataservice.news = article;
        console.log(this.dataservice.news)
        this.router.navigate(['/display', article.id])
    }

}
