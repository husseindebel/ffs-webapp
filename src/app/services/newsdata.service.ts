import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{

    base_api_url: string

    constructor(private http: Http){
        this.base_api_url = 'http://138.68.255.10/api/newsdata?startTime=2015-10-01T00:00:00Z&endTime=2015-10-10T00:00:00Z'
    }

    getNews(topicCode: string, ric:string){
        this.base_api_url += '&' + ric + '&' + topicCode;
        console.log(this.base_api_url);
        return this.http.get(this.base_api_url)
                .map(res => res.json());
    }
}
