import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../servicios/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent implements OnInit {

  public estudiantes: Estudiante[];

  public error: String[];

  constructor(private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    
    this.estudianteService.getClientes().subscribe(
      estudiantes => this.estudiantes = estudiantes
    );
  }
  eliminarEstudiante(id: number): void{
    this.estudianteService.eliminarEstudiante(id).subscribe(
      json => {
        console.log(json);
        this.router.navigate(['/estudiantes'])
        Swal.fire(
          'Eliminaste el estudiante',
          'de manera correcta '+ id,
          'success'
        )
        this.estudianteService.getClientes().subscribe(
          estudiantes => this.estudiantes = estudiantes
        );
      },
      err => {
        this.error = err.error as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error);
      }
    )
  }
  

}
