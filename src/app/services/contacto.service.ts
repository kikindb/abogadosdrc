import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ContactoService {
  urlSendEmail:string = 'http://abogadosdrc.com/api/EnviarEmail.php';
  constructor(public http: HttpClient) { 
    console.log('Servicio de Spotify Listo'); 
    
  }
  sendEmail(Contacto:string) {
    let params = "data="+Contacto;
 
    //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
    return this.http.post(this.urlSendEmail, params, {headers: headers});
  }

}
