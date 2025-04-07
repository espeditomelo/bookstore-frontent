import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { enviroment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url);
  }
}
