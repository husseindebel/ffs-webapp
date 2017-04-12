import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomepageComponent } from './components/homepage.component';
import { SearchResultComponent } from './components/searchresults.component';
import { NewsDisplayComponent } from './components/newsdisplay.component';

const appRoutes = [
    {path: '', component: HomepageComponent},
    {path: 'search', component: SearchResultComponent},
    {path: 'display/:id', component: NewsDisplayComponent, data: {something : 'hussein'}}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
