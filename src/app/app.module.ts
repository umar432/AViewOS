import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {  CarouselModule } from 'angular-bootstrap-md';
import { DataServiceService } from './data-service.service';
import { MyAppComponentComponent } from './my-app-component/my-app-component.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSearchComponent } from './component-search/component-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchSuggestionComponent } from './search-suggestion/search-suggestion.component';
import { routing } from './app.routing';
import { MatInputModule, MatFormFieldModule , MatNativeDateModule, MatDatepickerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponentComponent,
    ComponentSearchComponent,
    SearchFormComponent,
    SearchSuggestionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CarouselModule,
    HttpModule,
    HttpClientModule,
    routing,
    MatInputModule, 
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
