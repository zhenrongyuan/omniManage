import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandasModule } from '../comandas/comandas.module';
import { ProductosModule } from '../productos/productos.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,

    ComandasModule,
    ProductosModule,
    DashboardModule
  ],
  exports: [
    ComandasModule,
    ProductosModule,
    DashboardModule
  ]
})
export class SharedModule { }
