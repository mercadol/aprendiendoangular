import {Component} from '@angular/core';

@Component({
    selector: 'micomponente',
    templateUrl: './micomponente.component.html',
})
export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPelicula: boolean;

    constructor(){
        this.titulo = "Hola mundo, Soy MICOMPONENTE";
        this.comentario = "Este es mi primer Comentario";
        this.year = 2020;
        this.mostrarPelicula=true;

        console.log("Componente micomponente Cargado!!!");
        console.log(this.titulo, this.comentario, this.year);
        
    }

    ocultarPeliculas (){
        this.mostrarPelicula=false;
    }
}