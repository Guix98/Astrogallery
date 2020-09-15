import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];