import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{
    constructor(private http: Http){

    }

    getNews(query: string){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
                .map(res => res.json());
    }
}
