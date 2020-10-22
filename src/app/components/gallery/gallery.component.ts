import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: any[];
  loading: boolean;
  constructor(private apod: ApodService) {
    this.loading = true;
    apod.getFromDate('2020-07-01').subscribe((data: any) => {
      this.gallery = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
