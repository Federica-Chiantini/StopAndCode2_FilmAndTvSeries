import { Component } from '@angular/core';
import { SerieShow } from '../../models/serie.Interfaccia';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FilmSerieService } from '../../services/film-serie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  dettagliShow ?: SerieShow
  ratingStelle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //conto delle stelle nel rating

  constructor(private ar : ActivatedRoute, private FSservice : FilmSerieService){}

  ngOnInit(){
    this.ar.params.subscribe(p =>{ 
      const serieId = p['id']
      console.log(serieId)
      this.FSservice.showstramiteId(serieId).subscribe({
        next : (d) => this.dettagliShow = d,
        error : (e) => console.log(e)
      }
      )
    })
  }

  
}
