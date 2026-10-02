import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  // Asegúrate de que esta URL apunte a tu backend
  private apiUrl = `${environment.backendUrl}/api/catalogos`;

  constructor(private http: HttpClient) {}

  obtenerTiendas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tiendas`);
  }

  obtenerMotivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/motivos`);
  }

  // NUEVO: Consumo de la tabla Categorías
  obtenerCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }
}
