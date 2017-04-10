import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { HomepageComponent } from './components/homepage.component';
import { SearchResultComponent } from './components/searchresults.component';
import { NewsDisplayComponent } from './components/newsdisplay.component';

import {DisplayDataService} from './services/displaydata.service';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HomepageComponent, SearchResultComponent, NewsDisplayComponent ],
  providers:    [DisplayDataService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
