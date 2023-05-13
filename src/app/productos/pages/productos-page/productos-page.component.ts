import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { TipoProductoService } from 'src/app/shared/services/tipoProducto.service';
import { Tipo } from 'src/app/shared/interfaces/Tipo';

@Component({
  selector: 'productos-page',
  templateUrl: './productos-page.component.html',
  providers: [ProductoService],
})
export class ProductosPageComponent implements OnInit{

  public productos: Producto[] = [];
  public tiposProducto: Tipo[] = [];

  constructor( private productoService: ProductoService,
               private tipoProductoService: TipoProductoService, 
    ) {}

  ngOnInit(): void {

    this.productoService.getProductos()
      .subscribe( producto => 
        this.productos = producto['productos']
        );

    this.tipoProductoService.getTiposProducto()
      .subscribe( tiposProducto =>
        this.tiposProducto = tiposProducto['tiposProducto']
      );    
  }

  filtrar(clave: string){

    this.productoService.getProductos()
    .subscribe( producto => 
      this.productos = producto['productos'].filter( producto => producto.tipo.clave === clave )
      );
  }

}
