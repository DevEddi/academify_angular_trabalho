import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './aluno.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl = 'http://localhost:8080/api/aluno';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(`${this.baseUrl}/listar`);
  }

  cadastrar(aluno: Aluno): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/incluir`, aluno);
  }

  pesquisarPorId(id: number): Observable<Aluno> {
    return this.httpClient.get(`${this.baseUrl}/get/${id}`);
  }

  atualizar(aluno: Aluno): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/editar`, aluno);
  }

  deletar(aluno: Aluno): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/remover`,aluno);
  }
}
