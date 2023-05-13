
export interface Tipo {
    clave: string;
    glosa: string;
}

export interface TipoResultado {
    success:  boolean;
    tiposProducto: Tipo[];
}