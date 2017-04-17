import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { AppComponent }  from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchResultComponent } from './components/search/searchresults.component';
// import { NewsDisplayComponent } from './components/newsdisplay.component';
//
import {routing} from './app.routing';

// add routing for routing to work in imports
@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, MaterialModule.forRoot(), BrowserAnimationsModule ],
  declarations: [ AppComponent, HomepageComponent, SearchResultComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
