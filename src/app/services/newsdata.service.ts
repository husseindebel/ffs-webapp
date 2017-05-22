import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{

    base_api_url: string

    constructor(private http: Http){
        this.base_api_url = 'http://138.68.255.10/api/newsdata'
    }

    getNews(startTime: string, endTime:string, topicCode: string, ric:string){
        var news_url = this.base_api_url;

        news_url += '?startTime=' + startTime + 'T00:00:00Z';
        news_url += '&endTime=' + endTime + 'T00:00:00Z';
        // temp fix, this should be fixed in the api
        var formatted_ric = ric.split(',').map((val) => {
                            return "RIC_" + val;
                        }).join(",")

        if(ric !== ""){
            news_url += '&ric=' + formatted_ric ;
        }

        if (topicCode !== ""){
            news_url += '&topicCode=' + topicCode;
        }
        // console.log(topicCode, ric);
        console.log(news_url);
        return this.http.get(news_url)
                .map(res => res.json());
    }

    getNewsbyHeadline(headline: string){
        var headline_url = this.base_api_url;
        headline_url += '/headline?h='+headline;
        console.log(headline_url);
        return this.http.get(headline_url)
                .map(res => res.json());
    }
}
