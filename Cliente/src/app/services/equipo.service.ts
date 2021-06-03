import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url = 'http://localhost:4000/api/equipos/'

  constructor(private http: HttpClient) { }

  getEquipos(){
    return this.http.get<Array<Equipo>>(this.url)
  }

  eliminarEquipo(id: String):Observable<any>{
    return this.http.delete(this.url+id)
  }

  crearEquipo(equipo:Equipo):Observable<any>{
    return this.http.post(this.url, equipo)
  }

  obtenerEquipo(id:number | undefined):Observable<any>{
    return this.http.get(this.url+id)
  }

  editarEquipo(id:number | undefined, equipo: Equipo):Observable<any>{
    return this.http.put(this.url+id, equipo)
  }
}
