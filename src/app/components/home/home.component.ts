import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApodService } from '../../services/apod.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
picture: any ={};
video: any = {};
today:string;
yesterday:string ;
list: any[];
safeURL;

  constructor(apod: ApodService,
    data: DataService,
    private _sanitizer: DomSanitizer) {
      let date = new Date();
      date.setDate(date.getDate()-2);
      this.today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
      console.log(this.today);
      apod.getFromDate(this.today).subscribe((data:any)=>{
        this.list = data;
        this.picture = this.list[this.list.length-1];
      });
      apod.getByDate('2020-02-23').subscribe((data:any)=>{
        this.video= data;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);
      });



    }

  ngOnInit(): void {
  }

}
