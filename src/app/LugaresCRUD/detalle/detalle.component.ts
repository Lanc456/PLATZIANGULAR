import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DatosLugaresService } from '../../services/datos-lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

   lugar = null;
   id:any = null;
   
  constructor(private route: ActivatedRoute, private lugaresService:DatosLugaresService) {
      console.log(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.queryParams['action']);
      console.log(this.route.snapshot.queryParams['referido']);
      this.id = this.route.snapshot.params['id'];
      console.log(this.lugaresService.BuscarLugar(this.id));
      this.lugar = this.lugaresService.BuscarLugar(this.id);
   }

 

  ngOnInit() {
  }

}
