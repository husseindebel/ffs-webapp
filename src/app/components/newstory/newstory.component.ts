import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {NewsService} from '../../services/newsdata.service';
import {OnInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'newstory',
    templateUrl: 'newstory.component.html',
    // styleUrls: ['./newstory.component.css']
    providers: [NewsService]
})

export class NewsStoryComponent implements OnInit{

    story: Object;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: NewsService
    ){

    }

    ngOnInit(){
        this.route.queryParams
            .switchMap((params: Params) => this.service.getNewsbyHeadline(
                params['headline']))
            .subscribe((story) =>{
                this.story = story;
            })
    }

}
