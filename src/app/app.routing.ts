import {Routes, RouterModule} from '@angular/router';

import { MyAppComponentComponent } from './my-app-component/my-app-component.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchSuggestionComponent } from './search-suggestion/search-suggestion.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MyAppComponentComponent },
    { path: 'search', component: SearchFormComponent },
    { path: 'suggestions', component: SearchSuggestionComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);