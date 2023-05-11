import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/app/enviroments/enviroments';
import { ProductoResultado } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl: string = environments.baseUrl;
  
  constructor( private http: HttpClient ) { }

  getProductos(): Observable<ProductoResultado>{
    
    return this.http.get<ProductoResultado>(`${ this.apiUrl }/producto`);

  }
}
