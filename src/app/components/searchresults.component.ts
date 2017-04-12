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
    news: newsdata[];
    currentStory: News;
    showCurrentStory: boolean;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: NewsService,
      public dataservice: DisplayDataService,
    ) {
      this.showCurrentStory = false;
    }

    ngOnInit() {
        this.route.queryParams
          .switchMap((params: Params) => this.service.getNews(
                params['startTime'], params['endTime'],
                params['topicCode'], params['ric']))
          .subscribe((news) => this.news = news['NewsDataSet']);
    }

    toggleStory(){
      if(this.showCurrentStory == false){
        this.showCurrentStory = true;
      }else{
        this.showCurrentStory = false;
      }

    }

}

interface newsdata {
    Headline:string;
    InstrumentIDs:string[];
    NewsText:string;
    TimeStamp:string;
    TopicCode:string[];
}
