import { Component } from '@angular/core';
import { OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService } from '../../services/newsdata.service';
// import {News} from '../../News'
import { Observable }         from 'rxjs/Observable';
import {Newsdata} from '../../NewsData'
import {Companies} from '../../Companies';



@Component({
    moduleId: module.id,
    selector: 'companypage',
    templateUrl: 'companypage.component.html',
    styleUrls: ['companypage.component.css'],
    providers: [NewsService],
})

export class CompanyPageComponent implements OnInit{

    company: Observable<string>;
    date: string;
    latest_news: Newsdata;
    companyName: string;

    constructor(private route: ActivatedRoute, private service: NewsService, private router: Router) {
        this.date = '2015-12-12';
        // this.companyName = Companies['BHP.AX']
    }
    ngOnInit(){
        this.company = this.route.queryParams.map(params => params['c'] || 'None')

        this.route.queryParams.forEach((params: Params) => {
            var something = params['c'];
            this.companyName = Companies[something]
        });

        this.route.queryParams
          .switchMap((params: Params) => this.service.getNews(
                '2015-12-10', '2015-12-12',
                '', params['c']))
          .subscribe((news) => {
              this.latest_news = news['NewsDataSet'];
            //   this.logfile = news['logfile']
          });
    }

    displayNewsStory(headline:string){
        console.log("we are going to the news :)", encodeURIComponent(headline));
        this.router.navigate(['/news'], {
            queryParams: { headline: encodeURIComponent(headline) }
        });
    }

    getCompanyName(){
        this.company.subscribe(val => this.companyName = val)
    }
}
