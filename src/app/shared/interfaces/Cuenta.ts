import { Estado } from "./Estado";
import { MedioDePago } from "./MedioDePago";

export interface Cuenta {
    subtotal:      number;
    propina:      number;
    total:         number;
    medio_de_pago: MedioDePago;
    comentario:    string;
    estado:        Estado;
}