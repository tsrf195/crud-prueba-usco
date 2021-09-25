import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';
@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private urlEndPoint: string = 'http://localhost:8080/api/profesores';
  private urlFindById: string = 'http://localhost:8080/api/profesor';

  constructor(private http: HttpClient) { }

  getProfesores(): Observable<Profesor[]>{
    //return of(profe);
    return this.http.get<Profesor[]>(this.urlEndPoint);
  }
  buscarProfesorPorId(id: number): Observable<Profesor>{
    return this.http.get<Profesor>(this.urlFindById+"/"+id);
  };
}
