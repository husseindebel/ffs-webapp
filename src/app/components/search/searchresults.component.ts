import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService } from '../../services/newsdata.service';
import {News} from '../../News'
import { Observable }         from 'rxjs/Observable';
import {Newsdata} from '../../NewsData'

@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: 'searchresults.component.html',
    styleUrls: ['searchresults.component.css'],
    providers: [NewsService],
})
export class SearchResultComponent implements OnInit {
    news: Newsdata[];
    logfile: Object[];
    currentStory: News;
    showCurrentStory: boolean;
    searchTerms: string[];

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: NewsService,
    ) {
      this.showCurrentStory = false;
    }

    ngOnInit() {
        this.route.queryParams.subscribe((event) => {
            this.searchTerms = event['topicCode'].split(',');
            this.searchTerms = this.searchTerms.concat(event['ric'].split(','));
        })
        // this.searchTerms = this.searchTerms.concat(this.route.queryParams.map((params: Params) => params['ric']));
        this.route.queryParams
          .switchMap((params: Params) => this.service.getNews(
                params['startTime'], params['endTime'],
                params['topicCode'], params['ric']))
          .subscribe((news) => {
              for (var n in news['NewsDataSet']){
                  var current = news['NewsDataSet'][n]
                  var filter_ric = current.InstrumentIDs.map(function(elem){
                      return elem.replace('RIC_', '')
                  });
                  news['NewsDataSet'][n].InstrumentIDs = filter_ric;
              }
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


    doSomething(){
        console.log("hussein");
    }

    displayNewsStory(headline:string){
        console.log("we are going to the news :)", encodeURIComponent(headline));
        this.router.navigate(['/news'], {
            queryParams: { headline: encodeURIComponent(headline) }
        });
    }

}
