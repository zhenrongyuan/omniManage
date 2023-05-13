import { Component, OnInit } from '@angular/core';
import { Comanda } from '../../interfaces/comanda';
import { Tipo } from 'src/app/shared/interfaces/Tipo';
import { TipoProductoService } from 'src/app/shared/services/tipoProducto.service';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ProductoService } from 'src/app/productos/services/producto.service';
import { comandaNueva } from '../../interfaces/comandaNueva';

@Component({
  selector: 'app-comanda-crear-nueva-page',
  templateUrl: './comanda-crear-nueva-page.component.html',
  styles: [
  ]
})
export class ComandaCrearNuevaPageComponent implements OnInit{

  public tiposProducto: Tipo[] = [];
  public productos: Producto[] = [];
  public comandaNueva: Comanda = comandaNueva;
  
  constructor( private tiposProductoService: TipoProductoService,
               private productoService: ProductoService ){ }

  ngOnInit(): void {
    this.tiposProductoService.getTiposProducto()
      .subscribe( tipo => {
        this.tiposProducto = tipo['tiposProducto'];
      });
  }

  filtrar(clave: string){
    console.log(clave);
    
    this.productoService.getProductos()
    .subscribe( producto => 
      this.productos = producto['productos'].filter( producto => producto.tipo.clave === clave )
      );
  }
}
