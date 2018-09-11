
export class Contacto{

    public name:string;
    public phone:string;
    public email:string;
    public subject:string;
    public message:string;

    constructor(name?:string,phone?:string,email?:string,subject?:string,message?:string){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}