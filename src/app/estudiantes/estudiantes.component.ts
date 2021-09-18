import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../servicios/estudiante.service';



@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent implements OnInit {

  public estudiantes: Estudiante[];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getClientes().subscribe(
      estudiantes => this.estudiantes = estudiantes
    );
  }
  

}
