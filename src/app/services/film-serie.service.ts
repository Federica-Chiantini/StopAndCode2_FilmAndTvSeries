import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie, SerieShow } from '../models/serie.Interfaccia';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilmSerieService {

  constructor(private http : HttpClient) {}

  showsTrovati(cerca : string) : Observable<Serie[]> {
    return this.http.request<Serie[]>( 'GET', environment.apiURL + 'search/shows?q=' + cerca)
  }

  showstramiteId(id : number) : Observable<SerieShow> {
    return this.http.get<SerieShow>(environment.apiURL + 'shows/' + id)
  }
}
