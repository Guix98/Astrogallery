import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-date-finder',
  templateUrl: './date-finder.component.html',
  styleUrls: ['./date-finder.component.css']
})
export class DateFinderComponent {

  constructor(private apod: ApodService,
              private router: Router) { 

  }
  searchDate(date: string){
    this.router.navigate(['publication', date]);
    
  }




}
