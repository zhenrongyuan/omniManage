// Generated by https://quicktype.io

import { Cliente } from "src/app/cliente/interfaces/cliente";
import { Personal } from "src/app/personal/interfaces/personal";
import { Producto } from "src/app/productos/interfaces/producto";
import { Cuenta } from "src/app/shared/interfaces/Cuenta";
import { Estado } from "src/app/shared/interfaces/Estado";
import { Mesa } from "src/app/shared/interfaces/Mesa";
import { Tipo } from "src/app/shared/interfaces/Tipo";


export interface Comanda {
    _id:      string;
    cliente?:  Cliente;
    mesa?:     Mesa;
    tipo:     Tipo;
    cuenta:   Cuenta;
    personal?: Personal[];
    detalle:  Detalle[];
    __v?:     number;
    estado:  Estado;
}

export interface ComandasResultado {
    success:  boolean;
    comandas: Comanda[];
}

export interface Detalle {
    producto:   Producto;
    cantidad:   number;
    monto_neto: number;
    comentario: string;
    _id?:       string;
}

