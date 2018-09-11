import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ContactoService} from '../../services/contacto.service';
import {Contacto} from '../../models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  forma:FormGroup;
  urlSendEmail:string = 'http://abogadosdrc.com/api/EnviarEmail.php';
  public contacto:Contacto;
  public contactoEnviado:boolean=false;

  constructor(private _contactoService: ContactoService) { 
    this.contacto = new Contacto();
    this.forma = new FormGroup({
      'name': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]),
      'phone': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      'email': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                                  ]),
      'subject': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required])
    });

  }

  enviarDatos(){
    //console.log(this.forma.value);
    this.contacto.name =this.forma.value.name;
    this.contacto.email = this.forma.value.email;
    this.contacto.phone = this.forma.value.phone;
    this.contacto.subject = this.forma.value.subject;
    this.contacto.message = this.forma.value.message;
    let htmlMessage:string = "<p>Nombre: "+this.contacto.name+"</p>"+
                     "<p>Telefono: "+this.contacto.phone+"</p>"+
                     "<p>Email: "+this.contacto.email+"</p>"+
                     "<p>Asunto: "+this.contacto.subject+"</p>"+
                     "<p>Mensaje: "+this.contacto.message+"</p>";
    this._contactoService.sendEmail(htmlMessage).subscribe(
      result => {
        //console.log(result);

      },
      error => {
          //console.log(<any>error);
      }
    );
    this.forma.reset();
    this.contactoEnviado = true;
  }



}
