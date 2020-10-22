import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DateFinderComponent } from './components/date-finder/date-finder.component';
import { PublicationComponent } from './components/publication/publication.component';
import { BetweenDatesComponent } from './components/between-dates/between-dates.component';
import { BetweenGalleryComponent } from './components/between-gallery/between-gallery.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/:dates', component: BetweenGalleryComponent },
    { path: 'form/one', component: DateFinderComponent },
    { path: 'form/between', component: BetweenDatesComponent },
    { path: 'publication/:date', component: PublicationComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

