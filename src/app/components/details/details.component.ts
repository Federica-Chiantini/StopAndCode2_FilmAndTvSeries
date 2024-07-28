import { Component } from '@angular/core';
import { showCompleto } from '../../models/filmSerieInterfaccia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  dettagliShow ?: showCompleto
  ratingStelle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //conto delle stelle nel rating

  constructor(private router : Router){
    this.dettagliShow = this.router.getCurrentNavigation()?.extras.state as showCompleto
  }

  ngOnInit(){
    console.log(this.dettagliShow)
  }

  
}
