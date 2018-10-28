import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { query } from '@angular/core/src/render3/query';

@Injectable()
export class DatosLugaresService {
  lugares:any = [
                 {id:1, plan: 'pagado',    cercania:1,distancia:10, nombres:'Floreria la Gardenia', active: true,Descripcion:'Prueba 1'},
                 {id:2, plan: 'pagado',    cercania:2,distancia:15, nombres:'Donas la pasadita', active: false,Descripcion:'Prueba 2'},
                 {id:3, plan: 'pagado',    cercania:1,distancia:20, nombres:'Floreria 5', active: true,Descripcion:'Prueba 3'},
                 {id:4, plan: 'no pagado', cercania:3,distancia:25, nombres:'Doñas Florinda', active: false,Descripcion:'Prueba 4'},
                 {id:5, plan: 'no pagado', cercania:1,distancia:30, nombres:'Flor Naciente', active: true,Descripcion:'Prueba 5'},
                 {id:6, plan: 'no pagado', cercania:2,distancia:35, nombres:'Doñas Florinda', active: false,Descripcion:'Prueba 6'},
                 {id:7, plan: 'no pagado', cercania:2,distancia:40, nombres:'Flor Naciente', active: true,Descripcion:'Prueba 7'} 
                ]
  estudiante:any = {id: "", codigo : "", nombre : "", pais:""};

  constructor(private Afdb:AngularFireDatabase) { }

  public GetLugares()
  {
      return this.lugares;
  }

  public BuscarLugar(id) 
  {
     return this.lugares.filter((lugares) => { return lugares.id == id } )[0] || null;
  }

  public GuardarDatos(estudiante)
  {
      this.Afdb.database.ref('/Estudiante/'+ estudiante.id).set(estudiante);
  }

  public ObtenerEstudiante()
  {
     return this.Afdb.list('/Estudiante/').valueChanges();
  }

  public ObtenerdetalleEstudiante(id)
  {
     return this.Afdb.object('/Estudiante/'+ id).valueChanges();
  }

  public EliminarEstudiante(id)
  {
      return this.Afdb.database.ref('/Estudiante/' + id).remove();
  }


}
