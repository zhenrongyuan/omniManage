import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { ProductoTablaComponent } from './components/producto-tabla/producto-tabla.component';
import { NavProductosComponent } from './components/nav-productos/nav-productos.component';
import { ProductosPanelSeleccionComponent } from './components/productos-panel-seleccion/productos-panel-seleccion.component';
import { ModalAgregarProductosComponent } from './components/modal-agregar-productos/modal-agregar-productos.component';



@NgModule({
  declarations: [
    ModalAgregarProductosComponent,
    NavProductosComponent,
    ProductosPageComponent,
    ProductosPanelSeleccionComponent,
    ProductoTablaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalAgregarProductosComponent,
    NavProductosComponent,
    ProductosPanelSeleccionComponent,
    ProductoTablaComponent,

  ],
})
export class ProductosModule { }
