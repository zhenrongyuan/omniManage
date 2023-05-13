import { Component, OnInit } from '@angular/core';
import { Comanda } from '../../interfaces/comanda';
import { ComandasService } from '../../services/comandas.service';
import * as printJS from 'print-js';
import { TipoProductoService } from 'src/app/shared/services/tipoProducto.service';
import { Tipo } from 'src/app/shared/interfaces/Tipo';
import { ProductoService } from 'src/app/productos/services/producto.service';
import { Producto } from 'src/app/productos/interfaces/producto';

@Component({
  selector: 'comandas-tablero-page',
  templateUrl: './comandas-tablero-page.component.html',
  providers: [ComandasService],
})
export class ComandasTableroPageComponent implements OnInit {

  public productos: Producto[] = [];
  public comandas: Comanda[] = [];
  public tiposProducto: Tipo[] = [];

  constructor(private comandasService: ComandasService,
    private tipoProductoService: TipoProductoService,
    private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.comandasService.getComandas()
      .subscribe(comandas =>
        this.comandas = comandas['comandas']
      );

    this.tipoProductoService.getTiposProducto()
      .subscribe(tiposProducto =>
        this.tiposProducto = tiposProducto['tiposProducto']
      );

  }

  filtrar(clave: string){

    this.productoService.getProductos()
    .subscribe( producto => 
      this.productos = producto['productos'].filter( producto => producto.tipo.clave === clave )
      );
  }

  imprimirComanda(comanda: Comanda): void {
    // console.log(`Imprimiendo.... ${JSON.stringify(comanda)}`);
    // printJS(comanda._id, 'html');

  }
}
