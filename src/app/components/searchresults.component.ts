import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialModule} from '@angular/material';
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
      public dataservice: DisplayDataService,
    ) { }

    ngOnInit() {
        this.route.params
          .switchMap((params: Params) => this.service.getNews(params['id']))
          .subscribe((news) => this.news = news);
    }

    displayData(article: News){
        this.dataservice.news = article;
        console.log(this.dataservice.news)
        this.router.navigate(['/display', article.id])
    }

}
