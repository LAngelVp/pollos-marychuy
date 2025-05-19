export interface ProductosInterface {
    hamburguesas : Hamburguesas[];
    pollos: Pollos[];
    alitas_boneless: Alitas_boneless[];
    guarniciones: Guarniciones[];
    burritos: Burritos[];
    snacks: Snacks[];
    postres: Postres[];
    bebidas: Bebidas[];
    piernas_muslos: Piernas_muslos[];
}
export interface Hamburguesas{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Pollos{
    id: number;
    nombre: string
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Alitas_boneless{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Guarniciones{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Burritos{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Snacks{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Postres{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Bebidas{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Piernas_muslos{
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentaciones[];
    imagen: string;
}
export interface Presentaciones{
    nombre: string;
    precio: number;
    descripcion: string;
}
