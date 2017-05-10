import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, HostBinding } from '@angular/core';
import { NewsService } from '../../services/newsdata.service';

@Component({
  selector: 'company-page',
  templateUrl: './companypage.component.html',
  // styleUrls: ['./app.component.css']
  providers: [NewsService]
})
export class CompanypageComponent {

    news: Object[];
    logfile: Object;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: NewsService,
    ) {
    }

    ngOnInit() {
        this.route.queryParams
          .switchMap((params: Params) => this.service.getNews(
                '2015-10-01', '2015-10-10',
                "", params['ric']))
          .subscribe((news) => {
              console.log(news);
              this.news = news['NewsDataSet'];
              this.logfile = news['logfile']
          });
    }
}
