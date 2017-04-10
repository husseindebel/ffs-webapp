import {News} from '../News'
import {Injectable} from '@angular/core';

@Injectable()
export class DisplayDataService {
    public news: News;
    constructor(){
        this.news = {
            id: 6,
            title: 'hussein',
            body: 'hussein',
        };
    }
}
