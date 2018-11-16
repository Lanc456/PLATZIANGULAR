import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  HttpClient ,HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { map } from'rxjs/operators'
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ProfesorFirebaseService {

  profesor:any= { id:"", NombreProfesor:"",Materia:"",Edad:""}
  stringfirebase ="https://proyectoplayzi-1537647400089.firebaseio.com"
  constructor(private http:HttpClient, private Afdb:AngularFireDatabase) { }

 guardarProfesor(profesor)
  {
  
     const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};
     var datos = this.http.post("https://proyectoplayzi-1537647400089.firebaseio.com/Profesor.json/",  profesor, httpOptions)
        .subscribe(res => console.log(res));
     console.log("sali bien" + datos );
     return 1
  }

  
    public GuardarProfesor(profesor)
    {
        this.Afdb.database.ref('/Profesor/' + profesor.id).set(profesor);
    }

    public ObtenerDatosProfesor()
    {
        return this.http.get('https://proyectoplayzi-1537647400089.firebaseio.com/Profesor.json');
    }

    public ObtenerDatosProfesorPorCodigo()
    {
        const params = new HttpParams().set('id','123')
        return this.http.get('https://proyectoplayzi-1537647400089.firebaseio.com/Profesor.json',{params})
                            .subscribe((response) => console.log(Array.of(response)))
    }
}