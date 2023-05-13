import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';
import { Detalle } from 'src/app/comandas/interfaces/comanda';

@Component({
  selector: 'productos-panel-seleccion',
  templateUrl: './productos-panel-seleccion.component.html',
  styles: [
  ]
})
export class ProductosPanelSeleccionComponent implements OnInit {

  @Input()
  public productos: Producto[] = [];
  @Output()
  public detalles: Detalle[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.getProductos()
      .subscribe(producto =>
        this.productos = producto['productos']
      );

  }

  procesarDetalle(producto: Producto, cantidad: number):void {

    let detalleNuevo: Detalle = {
      cantidad: 1,
      producto: producto,
      monto_neto: producto.precio * cantidad,
      comentario: ''
    };

    if (cantidad > 0) {
      this.agregarDetalle(producto, detalleNuevo);
    }else{
      this.sustraerDetalle(producto);
    }

    console.log(this.detalles);
    
  }

  agregarDetalle(producto: Producto, detalleNuevo: Detalle): void {

    let existe: boolean = false;

    if ( this.detalles.length === 0 ) {
      detalleNuevo.cantidad = 1;
      this.detalles.push(detalleNuevo);
      return;
    }

    this.detalles.forEach( (detalle) => {
      
      if (JSON.stringify(detalle.producto) === JSON.stringify(producto) ) {
        detalle.cantidad += 1;
        detalle.monto_neto = detalle.cantidad * producto.precio;

        existe = true;
        return;
      }

    });

    if (!existe ) {
      detalleNuevo.producto = producto;
      detalleNuevo.monto_neto = producto.precio * detalleNuevo.cantidad;
      this.detalles.push(detalleNuevo);
    }
  }

  sustraerDetalle(producto: Producto) {
    let existe: boolean = false;
    
    if ( this.detalles.length === 0 ) {
      return;
    }

    this.detalles.forEach( (detalle, indice) => {
      
      if (JSON.stringify(detalle.producto) === JSON.stringify(producto) ) {
        
        if (detalle.cantidad > 1) {
          
          detalle.cantidad -= 1;
          detalle.monto_neto = detalle.cantidad * producto.precio;
          existe = true;
          return;
        }else{
          this.detalles.splice(indice, 1);
        }
      }
    });
  }
}
