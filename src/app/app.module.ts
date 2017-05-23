import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ng2-tag-input';
import { NgxChartsModule } from '@swimlane/ngx-charts'

import 'hammerjs';
import { AppComponent }  from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchResultComponent } from './components/search/searchresults.component';
import { NewsStoryComponent } from './components/newstory/newstory.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {HorizontalTimelineComponent} from './components/horizontal-timeline/horizontal-timeline.component';
import {NewsArticleComponent} from './components/newstory/newsarticle.component'
import {NewsStatsComponent} from './components/newstory/newsstats.component';
import {SectorPageComponent} from './components/sectors/sectorspage.component';
import {SectorStatsComponent} from './components/sectors/sectorstats.component';
import {CompanyPageComponent} from './components/companypage/companypage.component';

// import { NewsDisplayComponent } from './components/newsdisplay.component';
//
import {routing} from './app.routing';

// add routing for routing to work in imports
@NgModule({
  imports:      [ TagInputModule, BrowserModule, FormsModule, routing, HttpModule, BrowserAnimationsModule, NgxChartsModule ],
  declarations: [ AppComponent, HomepageComponent, SearchResultComponent, NewsStoryComponent, TimelineComponent, HorizontalTimelineComponent,
                  NewsArticleComponent, NewsStatsComponent, SectorPageComponent, SectorStatsComponent, CompanyPageComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
