import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoResultado } from '../interfaces/Tipo';
import { environments } from 'src/app/enviroments/enviroments';

@Injectable({providedIn: 'root'})
export class TipoProductoService {

  private apiUrl: string = environments.baseUrl;


    constructor( private http: HttpClient ) { }

    getTiposProducto(): Observable<TipoResultado>{
      
      return this.http.get<TipoResultado>(`${ this.apiUrl }/tipo_producto`);
  
    }
}