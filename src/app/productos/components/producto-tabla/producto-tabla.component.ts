import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styles: [
  ]
})
export class ProductoTablaComponent implements OnInit{

  @Input()
  public productos: Producto[] = [];  

  constructor() {}

  ngOnInit(): void {
    
  }



}
