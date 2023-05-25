import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comanda, ComandasResultado } from '../interfaces/comanda';
import { environments } from 'src/app/enviroments/enviroments';


@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  private apiUrl: string = environments.baseUrl;

  constructor( private http: HttpClient ) { }

  getComandas(): Observable<ComandasResultado>{
    
    return this.http.get<ComandasResultado>(`${ this.apiUrl }/comanda`);

  }

  saveComanda( comanda:Comanda){
    return this.http.post<Comanda>( `${ this.apiUrl}/comanda`, comanda);
  }
}
