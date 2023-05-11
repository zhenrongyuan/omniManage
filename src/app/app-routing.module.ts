import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandasTableroPageComponent } from './comandas/pages/comandas-tablero-page/comandas-tablero-page.component';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { ProductosPageComponent } from './productos/pages/productos-page/productos-page.component';

const routes: Routes = [
  {
    path: 'tablero-comandas',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
