import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandasModule } from '../comandas/comandas.module';
import { ProductosModule } from '../productos/productos.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    ComandasModule,
    ProductosModule,
    DashboardModule,
  ],
  exports: [
    SidebarComponent,

  ]
})
export class SharedModule { }
