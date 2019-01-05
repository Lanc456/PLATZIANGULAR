import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  Logros:any = [
    {id:1, titulo: 'Logro 1', Descripcion:'Esta prueba es de un pipe que crees espero que este bien'},
    {id:2, titulo: 'Logro 2', Descripcion:'Esta prueba es de un pipe que crees espero que este bien'},
    {id:3, titulo: 'Logro 3', Descripcion:'Esta prueba es de un pipe que crees espero que este bien'}
   ]

  constructor() {
   
   }




  ngOnInit() {
  }

}
