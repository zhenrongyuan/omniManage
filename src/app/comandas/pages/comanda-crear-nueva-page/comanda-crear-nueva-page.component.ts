import { Component, OnInit } from '@angular/core';
import { Comanda, Detalle } from '../../interfaces/comanda';
import { Tipo } from 'src/app/shared/interfaces/Tipo';
import { TipoProductoService } from 'src/app/shared/services/tipoProducto.service';
import { Producto } from 'src/app/productos/interfaces/producto';
import { ProductoService } from 'src/app/productos/services/producto.service';
import { comandaNueva, cuenta, cuenta as cuentaNueva } from '../../interfaces/comandaNueva';
import { Cuenta } from 'src/app/shared/interfaces/Cuenta';
import * as printJS from 'print-js';
import { ComandasService } from '../../services/comandas.service';

@Component({
  selector: 'app-comanda-crear-nueva-page',
  templateUrl: './comanda-crear-nueva-page.component.html',
  styles: [
  ]
})
export class ComandaCrearNuevaPageComponent implements OnInit{

  public tiposProducto: Tipo[] = [];
  public comandaNueva: Comanda = comandaNueva;
  
  constructor( private tiposProductoService: TipoProductoService,
               private comandaService: ComandasService ){ }

  ngOnInit(): void {
    this.tiposProductoService.getTiposProducto()
      .subscribe( tipo => {
        this.tiposProducto = tipo['tiposProducto'];
      });

    // this.productoService.getProductos()
    // .subscribe( productos => {
    //   this.productos = productos['productos']
    // })
  }

  // filtrar(clave: string){
    
  //   this.productoService.getProductos()
  //   .subscribe( producto => 
  //     this.productos = producto['productos'].filter( producto => producto.tipo.clave === clave )
  //     );
  // }

  actualizarDetalles(detalles: Detalle[]):void{
    this.comandaNueva.detalle = detalles;
    console.log(this.comandaNueva.detalle);

  }

  onCloseModal():void{
    
    this.reinicializarValores();
    this.comandaNueva.cuenta = cuentaNueva;
    const cuenta: Cuenta = this.calcularComanda(comandaNueva);
    this.comandaNueva.cuenta = cuenta;
  }

  calcularComanda(comanda: Comanda):Cuenta {

    const cuenta = cuentaNueva;

    comanda.detalle.forEach( detalle => {
      cuenta.subtotal += detalle.monto_neto;
      
    });

    cuenta.propina = cuenta.subtotal * 0.1;
    cuenta.total = cuenta.subtotal + cuenta.propina;

    return cuenta;

  }

  reinicializarValores():void{
    cuentaNueva.subtotal = 0;
    cuentaNueva.propina = 0;
    cuentaNueva.total = 0;
    cuentaNueva.comentario = '';
  }

  async enviarComanda( comanda: Comanda){
    
    this.comandaService.saveComanda( comanda ).subscribe(()=>{
      this.imprimirComanda( comanda )
      
    });
  }

  imprimirComanda(comanda: Comanda){
    printJS({
      printable: comanda._id,
      type: 'html',
      targetStyle: ['*'],
      css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
      style: '.card{ padding: 0, margin: 0, font-family: Arial} '
    });
  }
}
