import { Component, OnInit } from '@angular/core';
import { ProfesorFirebaseService } from 'src/app/services/profesor-firebase.service';

@Component({
  selector: 'app-obtener-profesor',
  templateUrl: './obtener-profesor.component.html',
  styleUrls: ['./obtener-profesor.component.css']
})
export class ObtenerProfesorComponent implements OnInit {
   Profesor:any = {};
  constructor(profesorServices:ProfesorFirebaseService) 
  { 
      profesorServices.ObtenerDatosProfesor()
              .subscribe(response =>
        {   
            this.Profesor  = Object.keys(response).map((key) => { return response[key] });
            console.log(this.Profesor)
            return Array.of(this.Profesor);
        });
        profesorServices.ObtenerDatosProfesorPorCodigo()
            console.log("Ver datos = " + this.Profesor);
  }

  ngOnInit() {
  }

}
