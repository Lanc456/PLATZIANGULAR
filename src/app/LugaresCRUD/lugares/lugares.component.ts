import { Component, OnInit } from '@angular/core';
import { DatosLugaresService } from '../../services/datos-lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent  {

  title = 'PlaztiSquare';
  a = 5;
  b = 6;
  listo = false;
  nombre:string = "";
  lugares= null;

  constructor(private lugaresService:DatosLugaresService  ) 
  {
    this.lugares = lugaresService.GetLugares();
    setTimeout(() => 
    {
       this.listo = true;
    }, 1000)
  }

  hacerAlgo() 
  {
    alert('Hola Mundo');
  }
}
