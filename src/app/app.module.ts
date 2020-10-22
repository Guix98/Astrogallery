import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { ROUTES } from './app.routes';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardsComponent } from './components/cards/cards.component';
import { DateFinderComponent } from './components/date-finder/date-finder.component';
import { FinderTwoDatesComponent } from './components/finder-two-dates/finder-two-dates.component';
import { PublicationComponent } from './components/publication/publication.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { BetweenDatesComponent } from './components/between-dates/between-dates.component';
import { BetweenGalleryComponent } from './components/between-gallery/between-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    CardsComponent,
    DateFinderComponent,
    FinderTwoDatesComponent,
    PublicationComponent,
    DomseguroPipe,
    BetweenDatesComponent,
    BetweenGalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
