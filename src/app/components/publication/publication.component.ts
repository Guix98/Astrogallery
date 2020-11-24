import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  picture: any = {};
  date: string;
  video:boolean;
  safeURL;
  constructor(private apod: ApodService,
              private router: ActivatedRoute,
              private _sanitizer: DomSanitizer) {
                this.video=false;
                this.router.params.subscribe((data: any) => {
                  
                  this.date = data.date;

                }

                );

                apod.getByDate(this.date).subscribe((data: any) => {
                              if (data.media_type == "video") {
                                this.video=true;
                                this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);
                                console.log(this.safeURL);
                                
                              }
                              this.picture = data;
                              console.log(this.picture);
                              return data;
                                 });

  }

  ngOnInit(): void {
  }

}
