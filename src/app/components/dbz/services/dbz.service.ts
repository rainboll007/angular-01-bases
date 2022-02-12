import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [];

    nuevo: Personaje = {
        nombre: 'Trunks',
        poder: 14000,
    }
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor() {}

    addNewPersonaje(data: Personaje) {
        this._personajes.push( data );
    }
    
}