import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService } from '../../services/newsdata.service';
import {News} from '../../News'

@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: 'searchresults.component.html',
    styleUrls: ['searchresults.component.css'],
    providers: [NewsService],
})
export class SearchResultComponent implements OnInit {
    news: newsdata[];
    logfile: Object[];
    currentStory: News;
    showCurrentStory: boolean;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: NewsService,
    ) {
      this.showCurrentStory = false;
    }

    ngOnInit() {
        this.route.queryParams
          .switchMap((params: Params) => this.service.getNews(
                params['startTime'], params['endTime'],
                params['topicCode'], params['ric']))
          .subscribe((news) => {
              this.news = news['NewsDataSet'];
              this.logfile = news['logfile']
          });
    }

    toggleStory(){
      if(this.showCurrentStory == false){
        this.showCurrentStory = true;
      }else{
        this.showCurrentStory = false;
      }

    }

    displayNewsStory(headline:string){
        console.log("we are going to the news :)", encodeURIComponent(headline));
        this.router.navigate(['/news'], {
            queryParams: { headline: encodeURIComponent(headline) }
        });
    }

}

interface newsdata {
    Headline:string;
    InstrumentIDs:string[];
    NewsText:string;
    TimeStamp:string;
    TopicCode:string[];
}
