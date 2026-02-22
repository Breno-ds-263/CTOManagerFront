import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CTO } from '../models/cto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CtoService {

  private api = 'http://localhost:8080/api/ctos';

  constructor(private http: HttpClient) {}

  listar(): Observable<CTO[]> {
    return this.http.get<CTO[]>(this.api);
  }

  salvar(cto: CTO): Observable<CTO> {
    return this.http.post<CTO>(this.api, cto);
  }

  excluir(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}