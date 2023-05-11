import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ComandasResultado } from '../interfaces/comanda';


@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  private apiUrl: string = 'http://localhost:3800/api';
  constructor( private http: HttpClient ) { }

  getComandas(): Observable<ComandasResultado>{
    
    return this.http.get<ComandasResultado>(`${ this.apiUrl }/comanda`);

  }
}
