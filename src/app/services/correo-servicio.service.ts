import { Injectable } from '@angular/core';
import {  HttpClient ,HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CorreoServicioService {

  constructor(private _http: HttpClient) { }

  public EnvioCorreo(body)
  {
      const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'} ) };
      this._http.post('http://localhost:3000/EnviarCorreo',body,httpOptions)
          .subscribe(res => console.log(res));;
      console.log("Todo bien");
  }

}
