import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula'
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  public peliculas: Array<Pelicula>;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo ="componente Pelicula";
    this.peliculas = this._peliculaService.getPeliculas();
    
  }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo());
    
  }

  ngDoCheck(): void {
    console.log("Duchek lanzado");
    
  }

  cambiarTitulo(){
    this.titulo = "el titulo ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("El componente se va a leiminar");
    
  }

}
