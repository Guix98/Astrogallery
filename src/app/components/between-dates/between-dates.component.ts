import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-between-dates',
  templateUrl: './between-dates.component.html',
  styleUrls: ['./between-dates.component.css']
})
export class BetweenDatesComponent implements OnInit {
  alert:boolean;
  constructor(private router: Router) {
    this.alert = false;
   }

  ngOnInit(): void {
  }
  searchDate(date1: string, date2: string){
    let dates: string;
    let inicio = new Date(date1);
    let final = new Date(date2);
    if (inicio > final) {
        this.alert = true;
    }
    else{
      this.alert = false;
      dates = date1 + '&&' + date2;

      console.log(dates);



      this.router.navigate(['gallery', dates]);
    }


  }

}
