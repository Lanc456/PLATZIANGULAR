import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink, RouterModule, Router } from '@angular/router';
import { DatosLugaresService } from '../../services/datos-lugares.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
   
    estudiante:any={};
    id:any= null;

  constructor(private router: Router, private route: ActivatedRoute, private EstudianService:DatosLugaresService) 
  { 
     this.id = this.route.snapshot.params['id'];
     console.log(this.id);
     EstudianService.ObtenerdetalleEstudiante(this.id)
     .subscribe(detalle => 
              {this.estudiante = detalle;
              console.log(this.estudiante);
            });

  }

  public guardarlugar() 
  {
    console.log(this.estudiante);
    this.estudiante.id = this.id;
    this.EstudianService.GuardarDatos(this.estudiante);
    
    alert("Actualizar Registro");
    this.router.navigate(['/obtenerestudiante'])
  }
 
  public EliminarEstudiante()
  {
    this.EstudianService.EliminarEstudiante(this.id);
    alert("Eliminar Registro");
    this.router.navigate(['/obtenerestudiante'])
  }



  ngOnInit() {
  }

}
