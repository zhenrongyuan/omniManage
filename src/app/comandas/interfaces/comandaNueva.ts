import { Cliente } from "src/app/cliente/interfaces/cliente"
import { Comanda, Detalle } from "./comanda"
import { Mesa } from "src/app/shared/interfaces/Mesa"
import { Tipo } from "src/app/shared/interfaces/Tipo"
import { Cuenta } from "src/app/shared/interfaces/Cuenta"
import { Personal } from "src/app/personal/interfaces/personal"
import { Estado } from "src/app/shared/interfaces/Estado"
import { MedioDePago } from "src/app/shared/interfaces/MedioDePago"
import { Producto } from "src/app/productos/interfaces/producto"

const cliente: Cliente = {
    nombre: '',
    correo: 'cliente@cliente.com',
    direccion: 'S/D',
    celular: '0'
}

const mesa: Mesa  = {
    nombre: '',
    capacidad: -1,
    piso: -1,
    ubicacion: '' 
}

const tipoComanda: Tipo = {
    clave: '',
    glosa: ''
};

const medio_de_pago: MedioDePago = {
    clave: '',
    glosa: '',
}

const estadoCuenta: Estado = {
    clave: '',
    glosa: '',
}

const estadoProducto: Estado = {
    clave: '',
    glosa: '',
}

const estadoComanda: Estado = {
    clave: '',
    glosa: '',
}


const cuenta: Cuenta = {
    subtotal: 0,
    propina: 0,
    total: 0,
    medio_de_pago,
    comentario: '',
    estado: estadoCuenta
};

const personal: Personal = {
    rut: '123456789-k',
    nombre: 'Camarero 1',
    direccion: 'S/D',
    celular: '9876543210',
    fecha_ingreso: '2000-01-01',
    _id: 'personal_id'
};

const tipoProducto: Tipo = {
    clave: '',
    glosa: ''
}

export const producto: Producto = {
    nombre: 'Sin Productos',
    descripcion: 'descripcion prod1',
    precio: 0,
    tipo: tipoProducto,
    _id: 'producto_id',
    estado: estadoProducto
}

const detalle: Detalle = {
    producto: producto,
    cantidad: 0,
    monto_neto: 0,
    comentario: '',
    _id: 'detalle_id'
};


export const comandaNueva: Comanda = {
    _id: 'id_comanda',
    cliente: cliente,
    mesa: mesa,
    tipo: tipoComanda,
    cuenta: cuenta,
    personal: [personal],
    detalle: [detalle],
    estado: estadoComanda

}