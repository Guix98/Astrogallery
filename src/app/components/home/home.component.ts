import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
picture: any;
  constructor(apod: ApodService) {
    apod.getByDate('2020-09-09')
    .subscribe((data: any) => {
        console.log(data);
        this.picture = data;
        return data;
    });

  }

  ngOnInit(): void {
  }

}
