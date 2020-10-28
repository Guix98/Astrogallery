import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
picture: any;
today:string;
yesterday:string ;
  constructor(apod: ApodService) {
    var date = new Date();
    this.today = date.getFullYear.toString()+"-"+date.getMonth.toString()+"-"+date.getDate.toString();
    console.log(this.today);
    
    apod.getByDate('2020-10-26')
    .subscribe((data: any) => {
        console.log(data);
        this.picture = data;
        return data;
    }, (error:any)=>{

    });

  }

  ngOnInit(): void {
  }

}
