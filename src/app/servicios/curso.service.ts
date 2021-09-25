import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private urlEndPoint: string = 'http://localhost:8080/api/cursos';
  private urlFindById: string = 'http://localhost:8080/api/curso';
  
  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]>{
    //return of(cursos);
    return this.http.get<Curso[]>(this.urlEndPoint);
  }
  buscarCursoPorId(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.urlFindById+"/"+id);
  };
}
