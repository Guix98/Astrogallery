import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  picture: any;
  date: string;
  video:boolean;
  constructor(private apod: ApodService,
              private router: ActivatedRoute) {
                this.video=false;
                this.router.params.subscribe((data: any) => {
                  console.log(data);
                  this.date = data.date;

                }

                );

                apod.getByDate(this.date).subscribe((data: any) => {
                              if (data.media_type == "video") {
                                this.video=true;
                              }
                              this.picture = data;
                              console.log(this.picture);
                              return data;
                                 });

  }

  ngOnInit(): void {
  }

}
