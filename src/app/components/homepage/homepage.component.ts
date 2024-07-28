import { Component } from '@angular/core';
import { showCompleto } from '../../models/filmSerieInterfaccia';
import { FilmSerieService } from '../../services/film-serie.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  titoloDaCercare : string = ""
  filmSerie : showCompleto[] = []

  constructor(private servizioShow : FilmSerieService){}

    inviaTitoloDaCercare(){
      this.servizioShow.showsTrovati(this.titoloDaCercare).subscribe({
            next: (dati) => {
              dati.length != 0 ? this.filmSerie = dati : alert('Titolo errato, prova a digitare un titolo diverso')
            },
            error: (errore) => {console.log(errore)}
          })
          }
}
