import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlaztiSquare';
  a = 5;
  b = 6;
  listo = false;
  nombre:string = "";
  lugares:any = [{nombres:'Floreria la Gardenia', active: true},
                 {nombres:'Donas la pasadita', active: false},
                 {nombres:'Floreria la Gardenia', active: true}]

  constructor() 
  {
    setTimeout(() => 
    {
       this.listo = true;
    }, 3000)
  }

  hacerAlgo() 
  {
    alert('Hola Mundo Cruel');
  }

}