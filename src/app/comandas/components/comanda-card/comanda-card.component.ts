import { Component, Input, OnInit } from '@angular/core';
import { Comanda } from '../../interfaces/comanda';

@Component({
  selector: 'comanda-card',
  templateUrl: './comanda-card.component.html',
  styles: [
  ]
})
export class ComandaCardComponent implements OnInit{

  @Input()
  public comanda!: Comanda;

  ngOnInit(): void {
    console.log(this.comanda.cliente?.nombre);
    
  }


}
