import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { showCompleto } from '../models/filmSerieInterfaccia';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilmSerieService {

  constructor(private http : HttpClient) {}

  showsTrovati(cerca : string) : Observable<showCompleto[]> {
    return this.http.get<showCompleto[]>(environment.apiURL + cerca)
  }
}
