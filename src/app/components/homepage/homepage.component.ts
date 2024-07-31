import { Component } from '@angular/core';
import { Serie } from '../../models/serie.Interfaccia';
import { FilmSerieService } from '../../services/film-serie.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  titoloDaCercare : string = ""
  filmSerie : Serie[] = []

  constructor(private FsService : FilmSerieService){}

    inviaTitoloDaCercare(){
      this.FsService.showsTrovati(this.titoloDaCercare).subscribe({
            next: (dati) => {
              dati.length != 0 ? this.filmSerie = dati : alert('Titolo errato, prova a digitare un titolo diverso')
            },
            error: (errore) => {console.log(errore)}
          })
          }
}
