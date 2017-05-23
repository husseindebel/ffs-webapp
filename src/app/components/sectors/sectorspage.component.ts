import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NgModel, NgForm} from '@angular/forms';
import { Observable }         from 'rxjs/Observable';
import { NewsService } from '../../services/newsdata.service';
import {Newsdata} from '../../NewsData'
import {SearchResultComponent} from '../search/searchresults.component';


@Component({
    moduleId: module.id,
    selector: 'sectorspage',
    templateUrl: 'sectorspage.component.html',
    styleUrls: ['sectorspage.component.css'],
    providers: [NewsService]
})
export class SectorPageComponent implements OnInit{
    news: Newsdata[];
    logfile: Object[];
    currentStats: string;
    ricCodes: string;
    date: string;

    constructor(
      private service: NewsService,
      private router: Router
    ) {
        this.currentStats = 'sector';
        this.ricCodes = 'BHP.AX;BLT.L';
        this.date = '2015-10-10';
    }

    ngOnInit() {
        // this.searchTerms = this.searchTerms.concat(this.route.queryParams.map((params: Params) => params['ric']));
         this.service.getNews(
                '2015-01-01', '2015-12-12',
                'COM', '')
          .subscribe((news) => {
            //   this.news = news['NewsDataSet'];
              this.logfile = news['logfile'];
              var topNews = news['NewsDataSet'].sort(function(a,b){
                return +new Date(b.TimeStamp) - +new Date(a.TimeStamp);
              }).splice(0,5);
              this.news = topNews;
          });
    }

    displayNewsStory(headline:string){
        console.log("we are going to the news :)", encodeURIComponent(headline));
        this.router.navigate(['/news'], {
            queryParams: { headline: encodeURIComponent(headline) }
        });
    }

    changeStats(){
        if (this.currentStats === 'sector'){
            this.currentStats = 'company';
        } else {
            this.currentStats = 'sector';
        }
    }
}
