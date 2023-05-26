import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComandasTableroPageComponent } from './pages/comandas-tablero-page/comandas-tablero-page.component';
import { ComandaCardComponent } from './components/comanda-card/comanda-card.component';
import { ProductosModule } from '../productos/productos.module';
import { ComandaCrearNuevaPageComponent } from './pages/comanda-crear-nueva-page/comanda-crear-nueva-page.component';
import { RouterModule } from '@angular/router';
import { DetallesGeneralesComponent } from './components/detalles-generales/detalles-generales.component';

@NgModule({
    declarations: [
        ComandasTableroPageComponent,
        ComandaCardComponent,
        ComandaCrearNuevaPageComponent,
        DetallesGeneralesComponent,
    ],
    exports: [
        ComandasTableroPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProductosModule,
    ]
})
export class ComandasModule { }
