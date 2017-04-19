import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{

    base_api_url: string

    constructor(private http: Http){
        this.base_api_url = 'http://138.68.255.10/api/newsdata?'
    }

    getNews(startTime: string, endTime:string, topicCode: string, ric:string){

        this.base_api_url += 'startTime=' + startTime + 'T00:00:00Z';
        this.base_api_url += '&endTime=' + endTime + 'T00:00:00Z';
        if(ric !== ""){
            this.base_api_url += '&ric=RIC_' + ric ;
        }
        if (topicCode !== ""){
            this.base_api_url += '&topicCode=' + topicCode;
        }
        // console.log(topicCode, ric);
        console.log(this.base_api_url);
        return this.http.get(this.base_api_url)
                .map(res => res.json());
    }
}
