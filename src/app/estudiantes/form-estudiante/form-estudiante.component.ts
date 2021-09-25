import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html'
})
export class FormEstudianteComponent implements OnInit {

  public estudiante: Estudiante = new Estudiante();

  public error: String[];
  
  constructor(private estudianteService: EstudianteService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id : string = params.get('id');
      if(id)
      {
        this.estudianteService.buscarEstudiantePorId(+id).subscribe(
          json => {
            console.log(json);
            this.estudiante = json;
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
  actualizarEstudiante(): void{
    console.log(this.estudiante);
    this.estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      json => {
        console.log(json);
        this.router.navigate(['/estudiantes'])
        Swal.fire(
          'Actualizaste el estudiante',
          'de manera correcta '+this.estudiante.nombre,
          'success'
        )
      },
      err => {
        this.error = err.error as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error);
      }
    )
  }
}
