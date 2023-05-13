import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { ProductoTablaComponent } from './components/producto-tabla/producto-tabla.component';
import { NavProductosComponent } from './components/nav-productos/nav-productos.component';
import { ProductosPanelSeleccionComponent } from './components/productos-panel-seleccion/productos-panel-seleccion.component';



@NgModule({
  declarations: [
    ProductosPageComponent,
    ProductoTablaComponent,
    NavProductosComponent,
    ProductosPanelSeleccionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavProductosComponent,
    ProductoTablaComponent,
    ProductosPanelSeleccionComponent,

  ],
})
export class ProductosModule { }
