import { Component, Input, OnInit } from '@angular/core';
import { Comanda } from '../../interfaces/comanda';
import { ComandasService } from '../../services/comandas.service';

@Component({
  selector: 'comandas-tablero-page',
  templateUrl: './comandas-tablero-page.component.html',
  providers: [ComandasService],
})
export class ComandasTableroPageComponent implements OnInit{

  public comandas: Comanda[] =[];

  constructor( private comandasService: ComandasService ) { }
  
  ngOnInit(): void {
    this.comandasService.getComandas()
      .subscribe( comandas => 
        this.comandas = comandas['comandas']
        );
    
  }
}
