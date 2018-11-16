import { Component, OnInit } from '@angular/core';
import { ProfesorFirebaseService } from 'src/app/services/profesor-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {

  profesor:any={};
  today:Number;
  numero:Number;
  

  constructor(private router:Router,private DatosProfesor:ProfesorFirebaseService) 
  { 
    this.today = Date.now();
    this.numero = 323.23422324;
  }
  
  ngOnInit() {
  }

  public guardarProfesor()
  {
    console.log(this.profesor);
    this.profesor.id = Date.now();
    //this.DatosProfesor.GuardarProfesor(this.profesor);
    this.DatosProfesor.guardarProfesor(this.profesor);
    alert("Registro Creado");
    this.profesor = {};
    this.router.navigate(['/obtenerprofesor']);
   

  }



}