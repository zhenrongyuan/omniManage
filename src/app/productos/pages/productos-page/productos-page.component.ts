import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'productos-page',
  templateUrl: './productos-page.component.html',
  providers: [ProductoService],
})
export class ProductosPageComponent implements OnInit{

  public productos: Producto[] = [];

  constructor( private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos()
      .subscribe( producto => 
        this.productos = producto['productos']
        );
  }

}
