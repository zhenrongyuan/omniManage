import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandasTableroPageComponent } from './pages/comandas-tablero-page/comandas-tablero-page.component';
@NgModule({
  declarations: [
    ComandasTableroPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ComandasTableroPageComponent,
  ]
})
export class ComandasModule { }
