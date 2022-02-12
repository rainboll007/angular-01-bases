import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-new-personaje',
  templateUrl: './new-personaje.component.html',
  styleUrls: ['./new-personaje.component.css']
})
export class NewPersonajeComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
  // @Input() personajes: Personaje[] = [];
  
  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000,
  }
  
  @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  constructor( private dbzService: DbzService ) { }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;

    console.log(this.nuevo);
    // this.onNewPersonaje.emit( this.nuevo );
    this.dbzService.addNewPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }

}
