import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-click.directive';
import { Routes, RouterModule } from "@angular/router";
import { DetalleComponent } from './LugaresCRUD/detalle/detalle.component';
import { LugaresComponent } from './LugaresCRUD/lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DatosLugaresService } from './services/datos-lugares.service';
import { ProfesorFirebaseService } from './services/profesor-firebase.service'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearEstudianteComponent } from './EstudianteCRUD/crear-estudiante/crear-estudiante.component';
import { ObtenerEstudianteComponent } from './EstudianteCRUD/obtener-estudiante/obtener-estudiante.component';
import { EditarEstudianteComponent } from './EstudianteCRUD/editar-estudiante/editar-estudiante.component';
import { EditarProfesorComponent } from './ProfesorCRUD/editar-profesor/editar-profesor.component';
import { CrearProfesorComponent } from './ProfesorCRUD/crear-profesor/crear-profesor.component';
import { ObtenerProfesorComponent } from './ProfesorCRUD/obtener-profesor/obtener-profesor.component';
import { HttpClientModule  } from '@angular/common/http';
import { LogicaMatematicasPipe } from './Pipes/Exponentials/logica-matematicas.pipe';
import { SumarDatos } from './Pipes/Suma/Sumar-Datos.pipe';
import { CorreoServicioService } from './services/correo-servicio.service';



const appRoutes: Routes = [
   {path:'',component:LugaresComponent},
   {path:'lugares',component:LugaresComponent},
   {path:'detalle/:id',component:DetalleComponent},
   {path:'contacto',component:ContactoComponent},
   {path:'estudiante',component:CrearEstudianteComponent},
   {path:'obtenerestudiante',component:ObtenerEstudianteComponent},
   {path:'editarestudiante/:id',component:EditarEstudianteComponent},
   {path:'crearprofesor',component:CrearProfesorComponent},
   {path:'obtenerprofesor',component:ObtenerProfesorComponent},
   {path:'editarprofesor/:id',component:EditarProfesorComponent}
]

export const firebaseConfig = {
  apiKey: "AIzaSyBPWJ4NvKRA3VuIetXDiwMmxGy_Y1Mnhfg",
  authDomain: "proyectoplayzi-1537647400089.firebaseapp.com",
  databaseURL: "https://proyectoplayzi-1537647400089.firebaseio.com",
  storageBucket: "proyectoplayzi-1537647400089.appspot.com",
  messagingSenderId: "194205249168"
};

 
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearEstudianteComponent,
    ObtenerEstudianteComponent,
    EditarEstudianteComponent,
    EditarProfesorComponent,
    CrearProfesorComponent,
    ObtenerProfesorComponent,
    LogicaMatematicasPipe,
    SumarDatos
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [DatosLugaresService,ProfesorFirebaseService,CorreoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }