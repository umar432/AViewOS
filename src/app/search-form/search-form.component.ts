import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from "../search-service.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  formData = {
    fromLocation: '', 
    toLocation:'' 
  };
  constructor(private searchServiceService:SearchServiceService) { }

  ngOnInit() {
    this.test();
  }

  test(){
    this.searchServiceService.myService().subscribe(res => {

      console.log(res);
    })
  }

}
