import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() items: any[] = [];
  constructor(private router: Router,
    private _sanitizer: DomSanitizer) { }
  goToDate(date: string){
    this.router.navigate(['publication', date]);
    
  }
  isVideo(media:string){
    if (media == "video") {
      return true;
    }
    else{
      return false;
    }
  }
  sanitize(url:string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
  }




}
