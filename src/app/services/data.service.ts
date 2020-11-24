import { Injectable } from '@angular/core';
import { ApodService } from './apod.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loaded = false;
  gallery95: any[] = [];
  gallery96: any[] = [];
  gallery97: any[] = [];
  gallery98: any[] = [];
  gallery99: any[] = [];
  gallery00: any[] = [];
  gallery01: any[] = [];
  gallery02: any[] = [];
  gallery03: any[] = [];
  gallery04: any[] = [];
  gallery05: any[] = [];
  gallery06: any[] = [];
  gallery07: any[] = [];
  gallery08: any[] = [];
  gallery09: any[] = [];
  gallery10: any[] = [];
  gallery11: any[] = [];
  gallery12: any[] = [];
  gallery13: any[] = [];
  gallery14: any[] = [];
  gallery15: any[] = [];
  gallery16: any[] = [];
  gallery17: any[] = [];
  gallery18: any[] = [];
  gallery19: any[] = [];
  gallery20: any[] = [];

  constructor(private apod: ApodService) {
    console.log('Data Service Working!');

    this.apod.getFromDate('2020-08-30').subscribe((data: any) => {
        this.loaded = true;
        this.gallery20 = data;

      });

    /*this.apod.getBetweenDates('2019-01-01', '2019-12-31').subscribe((data: any) => {
      this.gallery19 = data;

    });
    this.apod.getBetweenDates('2018-01-01', '2018-12-31').subscribe((data: any) => {
      this.gallery18 = data;

    });*/
   }

}
