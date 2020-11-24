import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApodService } from '../../services/apod.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: any[];

  safeURL;
  constructor(private apod: ApodService,
    public data: DataService,
    ) {

   
    this.gallery = this.data.gallery20;
   
    
  }

  ngOnInit(): void {
  }

}
