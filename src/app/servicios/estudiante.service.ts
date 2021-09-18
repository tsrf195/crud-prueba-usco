import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Estudiante } from '../models/estudiante';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  
  private urlEndPoint: string = 'http://localhost:8080/api/estudiantes';
  private urlFindById: string = 'http://localhost:8080/api/estudiante';
  
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Estudiante[]>{
    //return of(CLIENTES);
    return this.http.get<Estudiante[]>(this.urlEndPoint);
  }
  crearEstudiante(estudiante: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(this.urlEndPoint,estudiante);
  }
  buscarEstudiantePorId(id: number): Observable<Estudiante>{
    return this.http.get<Estudiante>(this.urlFindById+"/"+id);
  };
}
