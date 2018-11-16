import { Component, OnInit } from '@angular/core';
import { CorreoServicioService } from '../services/correo-servicio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private ContactaServicio: CorreoServicioService ) { }

  contactForm(form) {
    console.log(form);
    this.ContactaServicio.EnvioCorreo(form);
  }



  ngOnInit() {
  }




}
