import { Component, Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouritesServiceService {

  constructor(private http:HttpClient) { }

  myService(){
    return this.http.get("http://localhost:8080/favourites");
  }

}
