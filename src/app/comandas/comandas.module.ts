import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandasTableroPageComponent } from './pages/comandas-tablero-page/comandas-tablero-page.component';
import { ComandaCardComponent } from './components/comanda-card/comanda-card.component';
@NgModule({
  declarations: [
    ComandasTableroPageComponent,
    ComandaCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ComandasTableroPageComponent,
  ]
})
export class ComandasModule { }
