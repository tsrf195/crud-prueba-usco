import { Estudiante } from "./estudiante";

export class Matricula{
    id: number;
    estudiantes: Estudiante;
    fecha: Date;
    estado: boolean;

    constructor(){
        this.estudiantes = new Estudiante();
    }
}