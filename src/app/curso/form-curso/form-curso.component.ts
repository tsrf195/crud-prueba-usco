import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  public curso: Curso = new Curso();

  public profesores: Profesor[];

  public error: String[];

  constructor(private profesorservice: ProfesorService,private cursoservice: CursoService, private router: Router,private activatedRoute: ActivatedRoute) {} //activated router -> lee los parametros de la ruta


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id : string = params.get('id');
      if(id)
      {
        this.cursoservice.buscarCursoPorId(+id).subscribe(
          json => {
            console.log(json);
            this.curso = json;
          },
          err => {
            this.error = err.error as string[];
            console.error('Código del error desde el backend: ' + err.status);
            console.error(err.error);
          }
        )
      }
    }
    );
    this.profesorservice.getProfesores().subscribe( //llamo a todos los profesores
      profesores => this.profesores = profesores
    );
  }
  crearCurso(){
    console.log(this.curso)
  }
}
