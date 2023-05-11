import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { ProductoTablaComponent } from './components/producto-tabla/producto-tabla.component';



@NgModule({
  declarations: [
    ProductosPageComponent,
    ProductoTablaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
