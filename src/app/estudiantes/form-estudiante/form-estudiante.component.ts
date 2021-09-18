import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/servicios/estudiante.service';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {

  public estudiante: Estudiante = new Estudiante();

  public error: String[];
  constructor(private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
  }

  crearEstudiante(): void{
    console.log(this.estudiante);
    this.estudianteService.crearEstudiante(this.estudiante).subscribe(
      json => {
        console.log(json);
        this.router.navigate(['/estudiantes']);
      },
      err => {
        this.error = err.error as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error);
      }
    )
  }


}
