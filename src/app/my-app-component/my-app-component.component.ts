import { Component, OnInit, Testability } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'my-app-component',
  templateUrl: './my-app-component.component.html',
  styleUrls: ['./my-app-component.component.scss']
})
export class MyAppComponentComponent implements OnInit {
  myarr:any;
  testcitiesarr: any;
  cardexist:boolean=false;
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    this.test();
  }

  test(){
    this.dataService.myService().subscribe(res => {
      this.myarr =res;
      this.testcitiesarr=this.myarr.cities;
      console.log(this.testcitiesarr);
      this.cardexist=true;
      console.log(this.cardexist);
    });
  }

}
