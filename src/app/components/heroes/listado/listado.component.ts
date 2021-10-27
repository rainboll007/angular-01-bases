import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = ['Spiderman', 'hulk', 'Capitan America', 'Ironman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  };

}
