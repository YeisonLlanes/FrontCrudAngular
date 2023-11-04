import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Departamento } from '../Interfaces/departamento';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})

export class DepartamentoService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + 'api/Departamento/'

  constructor(private http:HttpClient) {}

  getList():Observable<Departamento[]>
  {
    return this.http.get<Departamento[]>(`${this.apiUrl}ObtenerTodos`);
  }

  add(modelo:Departamento):Observable<Departamento>{
    return this.http.post<Departamento>(`${this.apiUrl}CrearDpto`,modelo);
  }

  update(idDepartamento:number, modelo:Departamento):Observable<Departamento>{
    return this.http.put<Departamento>(`${this.apiUrl}ActualizarDpto/${idDepartamento}`,modelo);
  }

  delete(idDepartamento:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}EliminarDpto/${idDepartamento}`);
  }


}
