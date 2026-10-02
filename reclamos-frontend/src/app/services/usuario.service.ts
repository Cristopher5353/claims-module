import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.backendUrl}/api/usuarios`;

  constructor(private http: HttpClient) { }

  buscarPorDocumento(numero: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/documento/${numero}`);
  }

  buscarPorCorreo(correo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/correo/${correo}`);
  }
}
