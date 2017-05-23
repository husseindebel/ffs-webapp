import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchResultComponent } from './components/search/searchresults.component';
import { NewsStoryComponent } from './components/newstory/newstory.component';
// import { NewsDisplayComponent } from './components/newsdisplay.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SectorPageComponent } from './components/sectors/sectorspage.component';

const appRoutes = [
    {path: '', component: HomepageComponent},
    {path: 'search', component: SearchResultComponent},
    {path: 'news', component: NewsStoryComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'sectors', component: SectorPageComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
