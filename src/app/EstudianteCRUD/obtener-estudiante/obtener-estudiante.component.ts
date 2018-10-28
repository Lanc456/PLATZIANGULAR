import { Component, OnInit } from '@angular/core';
import { DatosLugaresService } from '../../services/datos-lugares.service';

@Component({
  selector: 'app-obtener-estudiante',
  templateUrl: './obtener-estudiante.component.html',
  styleUrls: ['./obtener-estudiante.component.css']
})
export class ObtenerEstudianteComponent implements OnInit {

  Estudiante:any = {};
  constructor(private DatosEstudiante:DatosLugaresService) 
  { 
      this.DatosEstudiante.ObtenerEstudiante().subscribe(_estudiante => {
        this.Estudiante = _estudiante;
        console.log(this.Estudiante)
        });  
  }

  


  ngOnInit() {
  }

}
