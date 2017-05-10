import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService } from '../../services/newsdata.service';
import {News} from '../../News'
import {HorizontalTimelineComponent} from '../horizontal-timeline/horizontal-timeline.component';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [NewsService]
})

/* this component takes inspiration and was heavily adapted from the following
    blog post about creating timelines using css and JavaScript
*/
/* https://codyhouse.co/gem/horizontal-timeline/ */

export class TimelineComponent {
   //  news: newsdata[];
   //  logfile: Object[];
    timeline: Object[];
   //
    isAvailable: boolean;

    title = 'app works!';

     content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
     ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae,
     ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam
     quisquam, quae, temporibus dolores porro doloribus.`;

   //
    constructor(
        private service: NewsService
    ){
        this.timeline = [
            { caption: '16 Jan', date: new Date(2014, 1, 16), selected: true, title: 'News Headline', content: this.content },
            { caption: '28 Feb', date: new Date(2014, 2, 28), title: 'Other News Headline', content: this.content },
            { caption: '20 Mar', date: new Date(2014, 3, 20), title: 'Other News Headline', content: this.content },
            { caption: '20 May', date: new Date(2014, 5, 20), title: 'Other News Headline', content: this.content },
            { caption: '09 Jul', date: new Date(2014, 7, 9), title: 'Other News Headline', content: this.content },
            { caption: '30 Aug', date: new Date(2014, 8, 30), title: 'Other News Headline', content: this.content },
            { caption: '15 Sep', date: new Date(2014, 9, 15), title: 'Other News Headline', content: this.content },
            { caption: '01 Nov', date: new Date(2014, 11, 1), title: 'Other News Headline', content: this.content },
            { caption: '10 Dec', date: new Date(2014, 12, 10), title: 'Other News Headline', content: this.content },
            { caption: '29 Jan', date: new Date(2015, 1, 19), title: 'Other News Headline', content: this.content },
            { caption: '3 Mar', date: new Date(2015, 3, 3), title: 'Other News Headline', content: this.content },
        ];
        this.isAvailable = false;
    }

   //
   //  ngOnInit() {
   //      this.fetchEvent().then(() => {
   //          this.isAvailable = true;
   //      })
   //  }
   //
   //  buildTimeline(news){
   //      // console.log(news);
   //      var timeline = []
   //      for (var i in news){
   //          // console.log(article);
   //          // console.log(i)
   //          var current_article = news[i];
   //          var something = {};
   //          if (i  === '0'){
   //              something['selected'] = true;
   //          }
   //          // console.log(current_article['TimeStamp'])
   //          something['caption'] = 'Hussein';
   //          something['date'] = new Date(current_article['TimeStamp']);
   //          something['title'] = current_article['Headline'];
   //          something['content'] = current_article['NewsText'];
   //          timeline.push(something);
   //      }
   //      return timeline;
   //  }
   //
   //
   //  fetchEvent(){
   //     return  this.service.getNews('2015-10-01', '2015-10-10', '', 'RIO.L').toPromise().then(event => {
   //         this.timeline = this.buildTimeline(event['NewsDataSet']);
   //      //    console.log(event); // Has a value
   //      //    console.log(this.timeline); // Has a value
   //
   //     });
   // }



}
interface newsdata {
    Headline:string;
    InstrumentIDs:string[];
    NewsText:string;
    TimeStamp:string;
    TopicCode:string[];
}
