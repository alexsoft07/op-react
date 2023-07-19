import { STATUS } from "./status.enum";

export class Contact {
    name = '';
    last = '';
    email = '';
    status = STATUS.ACTIVO;

    constructor(name, last, email, status){
        this.name = name;
        this.last = last;
        this.email = email;
        this.status = status;
    }
}