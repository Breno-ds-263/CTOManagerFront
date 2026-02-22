import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from '../models/modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private api = 'http://localhost:8080/api/modelos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.api);
  }

  salvar(modelo: Modelo): Observable<Modelo> {
    return this.http.post<Modelo>(this.api, modelo);
  }

  excluir(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}