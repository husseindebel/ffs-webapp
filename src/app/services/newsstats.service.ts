import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'
import { Response } from '@angular/http'
@Injectable()
export class NewsStatsService{

    base_api_url: string
    data: any[]
    constructor(private http: Http){
        this.base_api_url = 'http://128.199.255.9:3000/v5//id='
    }

    getData(id: string, date:string):Promise<any>{
        var news_url = this.base_api_url;
        news_url += id;
        news_url += '&dateOfInterest=' + date;
        news_url += '&listOfVars=CM_Return;AV_Return';
        news_url += '&upperWindow=5&lowerWindow=5';
        console.log(news_url);
        return this.http.get(news_url).toPromise()
                .then(res => res.json()).catch(this.handleError);
    }
    getCommodities(area:string,category:string,state:string,startDate:string,endDate:string):Promise<any>{
      var base_url = 'http://api.kaiworship.xyz/v5/';
      base_url += area;
      base_url += '/'+category;
      base_url += '/'+state;
      base_url += '?startDate='+ startDate;
      base_url += '&endDate='+ endDate;
      console.log(base_url);
      return this.http.get(base_url).toPromise().then(res => res.json()).catch(this.handleError);
      //http://api.kaiworship.xyz/v5/Retail/Food/SA,VIC,NT?startDate=2012-12-12&endDate=2017-01-27
    }

    private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Promise.reject(errMsg);
    }
}
