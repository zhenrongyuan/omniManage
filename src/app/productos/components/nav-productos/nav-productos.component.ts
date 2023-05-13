import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tipo } from 'src/app/shared/interfaces/Tipo';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'nav-productos',
  templateUrl: './nav-productos.component.html',
  styles: [
  ]
})
export class NavProductosComponent {

  @Input()
  public tiposProducto: Tipo[] = [];

  @Output()
  public tipoProductoSeleccionado = new EventEmitter<string>();

  filtrar(clave:string){
    this.tipoProductoSeleccionado.emit( clave );
    // const tabProducto = document.getElementById( clave );
    // if (tabProducto != null) {
    //   tabProducto.classList.add(
    //     'active'
    //    );
    // }

  }
}
