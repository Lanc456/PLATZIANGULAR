import { Component, OnInit } from '@angular/core';
import { DatosLugaresService } from '../../services/datos-lugares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
  
  estudiante:any = {};
  constructor(private router:Router, private DatosEstudiantess:DatosLugaresService) { }

  public guardarlugar() 
  {
    console.log(this.estudiante);
    this.estudiante.id = Date.now();
    this.DatosEstudiantess.GuardarDatos(this.estudiante);
    alert("Registro Creado");
    this.estudiante = {};
    this.router.navigate(['/obtenerestudiante'])
  }

  

  ngOnInit() {
    console.log("soy el ground");
  }

}
