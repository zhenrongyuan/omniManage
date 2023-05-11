import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandasModule } from '../comandas/comandas.module';
import { ProductosModule } from '../productos/productos.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ComandasModule,
    ProductosModule,
    DashboardModule,
    SidebarComponent,

  ]
})
export class SharedModule { }
