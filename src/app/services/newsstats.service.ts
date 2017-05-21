import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'
@Injectable()

export class NewsStatsService{

    base_api_url: string
    data: any[]
    constructor(private http: Http){
        this.base_api_url = 'http://174.138.67.207/InstrumentID/'
    }

    getData(id: string, date:string):Promise<any>{
        var news_url = this.base_api_url;
        news_url += id;
        news_url += '/DateOfInterest/' + date;
        news_url += '/List_of_Var/CM_Return,AV_Return/';
        news_url += 'Upper_window/5/Lower_window/3';
        console.log(news_url);
        return this.http.get(news_url).toPromise()
                .then(res => res.json());
    }
    getCommodities(area:string,category:string,state:string,startDate:string,endDate:string){
      var base_url = 'http://api.kaiworship.xyz/v5/';
      base_url += area;
      base_url += '/'+category;
      base_url += '/'+state;
      base_url += '?startDate='+ startDate;
      base_url += '&endDate='+ endDate;
      console.log(base_url);
      return this.http.get(base_url).map(res => res.json());
      //http://api.kaiworship.xyz/v5/Retail/Food/SA,VIC,NT?startDate=2012-12-12&endDate=2017-01-27
    }
}
