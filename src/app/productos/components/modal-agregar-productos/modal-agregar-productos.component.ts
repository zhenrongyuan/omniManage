import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tipo } from 'src/app/shared/interfaces/Tipo';
import { Producto } from '../../interfaces/producto';
import { Detalle } from 'src/app/comandas/interfaces/comanda';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'modal-agregar-productos',
  templateUrl: './modal-agregar-productos.component.html',
  styles: [
  ]
})
export class ModalAgregarProductosComponent {

  
  constructor( private productoService: ProductoService){}

  public productos: Producto[] = [];

  @Input()
  public tiposProducto: Tipo[] = [];
 
  @Output()
  public closeModal = new EventEmitter<string>();
  @Output()
  public actualizaDetalles = new EventEmitter<Detalle[]>();
  

  onTipoProductoSeleccionado(tipo: string):void{
    
    this.productoService.getProductos()
    .subscribe( producto => 
      this.productos = producto['productos'].filter( producto => producto.tipo.clave === tipo )
      );
  }

  actualizaDetallesModal(detalles: Detalle[]):void{
    this.actualizaDetalles.emit(detalles);
  }

  cerrarModal():void{

    this.closeModal.emit('cerrarModal');
  }
}
