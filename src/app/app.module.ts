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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearEstudianteComponent } from './EstudianteCRUD/crear-estudiante/crear-estudiante.component';
import { ObtenerEstudianteComponent } from './EstudianteCRUD/obtener-estudiante/obtener-estudiante.component';
import { EditarEstudianteComponent } from './EstudianteCRUD/editar-estudiante/editar-estudiante.component';



const appRoutes: Routes = [
   {path:'',component:LugaresComponent},
   {path:'lugares',component:LugaresComponent},
   {path:'detalle/:id',component:DetalleComponent},
   {path:'contacto',component:ContactoComponent},
   {path:'estudiante',component:CrearEstudianteComponent},
   {path:'obtenerestudiante',component:ObtenerEstudianteComponent},
   {path:'editarestudiante/:id',component:EditarEstudianteComponent}
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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [DatosLugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }