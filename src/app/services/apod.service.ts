import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map  } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApodService {
    constructor(private http: HttpClient){
        console.log('APOD Service Works!');
    }
    private key = '00FmdithvSghycve9AFB7xSgpm25kSZ1UAzJbu5Q';
    getQuery(headers: HttpHeaders){
        const url = 'https://api.nasa.gov/planetary/apod';
        return this.http.get(url, {headers});
    }
    getToday(){
        const headers = new HttpHeaders({
            api_key : 'DEMO_KEY'
        });
        const url = 'https://api.nasa.gov/planetary/apod?api_key=00FmdithvSghycve9AFB7xSgpm25kSZ1UAzJbu5Q';

        return this.http.get(url);
    }
    getByDate(date: string){

        const url = 'https://api.nasa.gov/planetary/apod?date=' + date + '&api_key=00FmdithvSghycve9AFB7xSgpm25kSZ1UAzJbu5Q';
        return this.http.get(url);
    }
    getFromDate(date: string){

        const url = 'https://api.nasa.gov/planetary/apod?api_key=00FmdithvSghycve9AFB7xSgpm25kSZ1UAzJbu5Q&start_date=' + date;
        return this.http.get(url);
    }

    getBetweenDates(start: string, end: string){

        // tslint:disable-next-line: max-line-length
        const url = 'https://api.nasa.gov/planetary/apod?api_key=00FmdithvSghycve9AFB7xSgpm25kSZ1UAzJbu5Q&end_date=' + end + '&start_date=' + start;
        return this.http.get(url);
    }

}

