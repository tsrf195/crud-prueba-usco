import { Profesor } from "./profesor";
import { Salon } from "./salon";

export class Curso{
    id: number;
    nombre: string;
    id_salon: Salon;
    id_profesor: Profesor;

    constructor(){
        this.id_salon = new Salon();
        this.id_profesor = new Profesor();
    }
}