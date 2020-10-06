import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula('spiderman4', 2019, 'http://4.bp.blogspot.com/-3qO262nbxy0/TigVMsmExKI/AAAAAAAABqk/F6UWeCyEpoA/s1600/The+Amazing+Spider-Man+4+Wallpaper+06.jpg'),
            new Pelicula('spiderman4', 2019, 'http://4.bp.blogspot.com/-3qO262nbxy0/TigVMsmExKI/AAAAAAAABqk/F6UWeCyEpoA/s1600/The+Amazing+Spider-Man+4+Wallpaper+06.jpg'),
            new Pelicula('Los Vengadores EndGame', 2018, 'http://es.web.img3.acsta.net/newsv7/19/04/20/10/32/3283729.jpg'),
            new Pelicula('Batman vs Superman', 2017, 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/53e2d437e4b038bdcd5430ef/1407374418222/batman_v_superman_dawn_of_justice___trinity_poster_by_lamboman7-d7sesun.png')
        ];
    }

    holaMundo(){
        return 'Hola Mundo desde un servicio Angular!!!';
    }

    getPeliculas(){
        return this.peliculas
    }
}