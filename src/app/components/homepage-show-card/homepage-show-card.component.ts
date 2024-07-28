import { Component, Input } from '@angular/core';
import { showCompleto } from '../../models/filmSerieInterfaccia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-show-card',
  templateUrl: './homepage-show-card.component.html',
  styleUrl: './homepage-show-card.component.scss'
})
export class HomepageShowCardComponent {
  @Input()
  schedaShow !: showCompleto 

  constructor(private router : Router){}

  vaiAllaScheda(id : number){ 
    this.router.navigate(['details/', id], {state: this.schedaShow})
  }
}
