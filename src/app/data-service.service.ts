import { Component, Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  myService(){
    return this.http.get("https://maps.avios.com/avios-explorer-api-1.0/locations/BAEC/?contentLocale=en");
  }

}
