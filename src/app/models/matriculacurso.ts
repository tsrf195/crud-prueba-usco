import { Curso } from "./curso";
import { Matricula } from "./matricula";

export class MatriculaCurso{
    id: number;
    estado: boolean;
    matricula: Matricula;
    curso: Curso;

    constructor(){
        this.curso = new Curso();
        this.matricula = new Matricula();
    }
}