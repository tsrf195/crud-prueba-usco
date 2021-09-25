import { Dia } from "./dia";
import { Hora } from "./hora";
import { Salon } from "./salon";

export class EspacioFecha{
    id: number;
    salon: Salon;
    dia: Dia;
    hora: Hora;

    constructor(){
        this.salon = new Salon();
    }
}