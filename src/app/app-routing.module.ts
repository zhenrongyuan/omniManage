import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandasTableroPageComponent } from './comandas/pages/comandas-tablero-page/comandas-tablero-page.component';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { ProductosPageComponent } from './productos/pages/productos-page/productos-page.component';
import { ComandaCrearNuevaPageComponent } from './comandas/pages/comanda-crear-nueva-page/comanda-crear-nueva-page.component';

const routes: Routes = [
  {
    path: 'comandas-tablero',
    component: ComandasTableroPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'productos',
    component: ProductosPageComponent
  },
  {
    path: 'nueva-comanda',
    component: ComandaCrearNuevaPageComponent
  },
  {
    path: '**',
    redirectTo: 'comandas-tablero'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
