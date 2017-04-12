import {News} from '../News'
import {Injectable} from '@angular/core';

// this should be a global service
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
