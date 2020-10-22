import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-between-gallery',
  templateUrl: './between-gallery.component.html',
  styleUrls: ['./between-gallery.component.css']
})
export class BetweenGalleryComponent {

  gallery: any[];
  loading: boolean;
  from: string;
  to: string;
  dates: string;
  constructor(private apod: ApodService,
              private router: ActivatedRoute) {
                this.router.params.subscribe((data: any) => {
                  this.dates = data.dates;
                  let splitdate = this.dates.split('&&');
                  this.from = splitdate[0];
                  this.to = splitdate[1];

                }

                );

                this.loading = true;
                apod.getBetweenDates(this.from,this.to).subscribe((data: any) => {
      this.gallery = data;
      this.loading = false;
    });

  }
}
