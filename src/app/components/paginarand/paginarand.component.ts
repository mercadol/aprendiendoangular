import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-paginarand',
  templateUrl: './paginarand.component.html',
  styleUrls: ['./paginarand.component.css']
})
export class PaginarandComponent implements OnInit {
  public nombre: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.nombre=params.nombre;
    });
  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', 'Leonardo']);//separando con comas introdusco los parametros que necesite pasar por url
  }

}
