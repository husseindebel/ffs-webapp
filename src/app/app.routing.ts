import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomepageComponent } from './components/homepage.component';

const appRoutes = [
    {path: '', component: HomepageComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
