import { Estado } from "src/app/shared/interfaces/Estado";
import { Tipo } from "src/app/shared/interfaces/Tipo";

export interface Producto {
    nombre:       string;
    descripcion:  string;
    precio:       number;
    popularidad?: number;
    tipo:         Tipo;
    _id?:         string;
    estado:      Estado;
}

export interface ProductoResultado {
    success:  boolean;
    productos: Producto[];
}
