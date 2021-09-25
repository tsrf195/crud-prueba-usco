import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 

  public cursos: Curso[];

  constructor(private cursosService: CursoService) { }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(
      cursos => this.cursos = cursos
    );
  }

}
