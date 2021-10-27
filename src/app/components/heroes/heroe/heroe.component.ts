import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(){
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        let heroes = ['Ironman', 'Spiderman', 'Capitan América', 'Hulk', 'Falcon', 'Antman', 'Wisp', 'Blackwidow', 'Captan Marvel'];
        let nuevoHeroe: string;

        do {
            nuevoHeroe = heroes[this.getRandomInt(0,heroes.length)];
        } while (nuevoHeroe == this.nombre);

        this.nombre = nuevoHeroe;
    }

    cambiarEdad(): void {
        this.edad = this.getRandomInt(25, 45);
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}