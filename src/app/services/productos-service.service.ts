import { Injectable } from '@angular/core';
import { ProductosInterface } from '../models/productos-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  categoriaActual: string = '';
  productosMostrador: any[] = [];

  constructor() { }

  productos: ProductosInterface = {
    hamburguesas : [
      {
        id: 1,
        nombre: "Tradicional",
        descripcion: "carne de res o pollo, queso amarillo, cebolla asada y vegetales.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 60,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 75,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 2,
        nombre: "Tocino",
        descripcion: "Carne de res o pollo, tocino, queso amarillo, cebolla asada y vegetales.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 70,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 80,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 3,
        nombre: "Hawaiano",
        descripcion: "Carne de res, jamón, queso blanco, piña y cebolla asada con vegetales.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 70,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 85,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 4,
        nombre: "3 quesos",
        descripcion: "Carne de res, queso blanco, amarillo y crema. cebolla asada y vegetales.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 70,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 85,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 5,
        nombre: "Mary chuy",
        descripcion: "Doble carne de res, tocino, queso amarillo y blanco, cebolla asada, vegetales y aderezo chipotle.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 80,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 95,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 6,
        nombre: "Mexicana",
        descripcion: "Pan brioche, carne de res, guacamole, pico de gallo, queso blanco y aderezo chipotle.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 80,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 95,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 7,
        nombre: "Vaquera",
        descripcion: "Pan brioche, carne de res, queso blanco, aros de cebolla y salsa bbq.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 85,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 100,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 8,
        nombre: "Chilli burguer",
        descripcion: "Pan brioche, carne de res, chilibeans, tocino, queso amarillo y cebolla asada.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 85,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 100,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 9,
        nombre: "Cheese burguer",
        descripcion: "Pan brioche, carne de res, queso amarillo, salsa de queso, tocino, cebolla asada y aderezo especial.",
        presentaciones: [
          {
            nombre: "Normal",
            precio: 75,
            descripcion: "Sin papas"
          },
          {
            nombre: "Con papas",
            precio: 90,
            descripcion: "Con papas"
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
    ],
    pollos: [
      {
        id: 1,
        nombre: "Kentucky",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 245,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 140,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 2,
        nombre: "Barbacoa",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 3,
        nombre: "Asado",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 220,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 120,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 4,
        nombre: "Adobo a la crema",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 5,
        nombre: "Adobo chipotle",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 6,
        nombre: "Salsa macha",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 7,
        nombre: "Salsa de cacahuate",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 8,
        nombre: "Rostizado con avantes",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
      {
        id: 9,
        nombre: "Salsa BBQ",
        descripcion: "",
        presentaciones:[
          {
            nombre: "Entero",
            precio: 240,
            descripcion: ""
          },
          {
            nombre: "Medio",
            precio: 130,
            descripcion: ""
          },
        ],
        imagen: "assets/LOGOS/logo_sin_fondo.svg"
      },
    ],
    alitas_boneless: [
      {
        id:1,
        nombre: "Alitas",
        descripcion: 'Alitas de pollo',
        presentaciones: [
          {
            nombre: '10 alitas',
            precio : 120,
            descripcion: ''
          },
          {
            nombre: '15 alitas',
            precio : 165,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:2,
        nombre: "Boneless",
        descripcion: 'Boneless de pollo',
        presentaciones: [
          {
            nombre: '300g de boneless',
            precio : 100,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      }
    ],
    guarniciones: [
      {
        id:1,
        nombre: "Arroz",
        descripcion: 'Arroz',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 30,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:2,
        nombre: "Pure de papa",
        descripcion: 'papa machucada',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 35,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:3,
        nombre: "Frijjoles",
        descripcion: 'Frijoles refritos',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 30,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:4,
        nombre: "Tortillas",
        descripcion: 'Tortillas calientitas de maiz',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 8,
            descripcion: ''
          },
          {
            nombre: '1 kg',
            precio : 22,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:5,
        nombre: "Totopos",
        descripcion: 'Totopos crujientes',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 15,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:6,
        nombre: "Consome",
        descripcion: 'Caldo de pollo',
        presentaciones: [
          {
            nombre: 'Orden individual',
            precio : 45,
            descripcion: ''
          },
          {
            nombre: '1 Litro',
            precio : 80,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:7,
        nombre: "Pico de gallo",
        descripcion: 'Pico de gallo fresco del dia',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 45,
            descripcion: ''
          }
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:8,
        nombre: "Guacamole",
        descripcion: 'Guacamole delicioso, con aguacates frescos',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 60,
            descripcion: ''
          }
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:9,
        nombre: "Chili-beans",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 50,
            descripcion: ''
          }
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
    ],
    burritos: [
      {
        id:1,
        nombre: "Tradicional",
        descripcion: '',
        presentaciones: [
          {
            nombre: '2 piezas',
            precio : 90,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:2,
        nombre: "Jumbo",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 pieza',
            precio : 100,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:3,
        nombre: "Chimichanga",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 pieza',
            precio : 120,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:4,
        nombre: "Pollo chipotle",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 pieza',
            precio : 110,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
    ],
    snacks: [
      {
        id:1,
        nombre: "Nuggets de pollo",
        descripcion: '',
        presentaciones: [
          {
            nombre: '10 piezas',
            precio : 60,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:2,
        nombre: "Papas a la francesa",
        descripcion: '',
        presentaciones: [
          {
            nombre: '300 gramos',
            precio : 60,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:3,
        nombre: "Papas de gajo",
        descripcion: '',
        presentaciones: [
          {
            nombre: '300 gramos',
            precio : 70,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:4,
        nombre: "Dedos de queso",
        descripcion: '',
        presentaciones: [
          {
            nombre: '6 piezas',
            precio : 85,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:5,
        nombre: "Aros de cebolla",
        descripcion: '',
        presentaciones: [
          {
            nombre: '6 piezas',
            precio : 70,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:6,
        nombre: "Chili-nachos",
        descripcion: 'Totopos, queso amarillo, chilibeans, queso fundido, pico de gallo y guacamole.',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 110,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:7,
        nombre: "Nachos con carne asada",
        descripcion: 'Totopos, carne de res, queso amarillo, chiles en vinagre, jitomate, guacamole y crema.',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 95,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:8,
        nombre: "Chili-papas",
        descripcion: 'Papas a la francesa, queso amarillo, queso fundido, chilibeans y queso parmesano.',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 100,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
    ],
    postres: [
      {
        id:1,
        nombre: "Flan napolitano",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Rebanada',
            precio : 40,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:2,
        nombre: "Banana split",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 65,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:3,
        nombre: "Platanos fritos",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 40,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:4,
        nombre: "Copa de helado",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Orden',
            precio : 40,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
    ],
    bebidas: [
      {
        id:1,
        nombre: "Agua de Temporada",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 Litro',
            precio : 50,
            descripcion: ''
          },
          {
            nombre: 'Jarra 2 Litros',
            precio : 90,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
       {
        id:2,
        nombre: "Refresco",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Chico',
            precio : 25,
            descripcion: ''
          },
          {
            nombre: 'Grande',
            precio : 30,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
       {
        id:4,
        nombre: "Jugos",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 pieza',
            precio : 25,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:5,
        nombre: "Agua embotellada",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 pieza',
            precio : 20,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:6,
        nombre: "Cerveza",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Victoria',
            precio : 30,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:7,
        nombre: "Michelada",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Victoria',
            precio : 70,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
      {
        id:8,
        nombre: "Chelada",
        descripcion: '',
        presentaciones: [
          {
            nombre: 'Victoria',
            precio : 40,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
    ],
    piernas_muslos: [
      {
        id:1,
        nombre: "Pierna con muslo Kentoky",
        descripcion: '',
        presentaciones: [
          {
            nombre: '1 pieza',
            precio : 55,
            descripcion: ''
          },
          {
            nombre: '2 piezas',
            precio : 75,
            descripcion: ''
          },
          {
            nombre: '3 piezas',
            precio : 85,
            descripcion: ''
          },
          {
            nombre: '6 piezas',
            precio : 160,
            descripcion: ''
          },
          {
            nombre: '12 piezas',
            precio : 300,
            descripcion: ''
          },
        ],
        imagen: 'assets/LOGOS/logo_sin_fondo.svg'
      },
    ],
  }
  mostrarProductos(categoria: keyof ProductosInterface): Observable<any[]> {
    this.categoriaActual = categoria;
    this.productosMostrador = this.productos[categoria] || [];
    return of(this.productosMostrador);
  }

  buscar_producto(dato: string): Observable<any[]>{
    const texto_buscado = dato.toLowerCase();

    const todosLosProductos = [
      ...this.productos.hamburguesas,
      ...this.productos.pollos,
      ...this.productos.alitas_boneless,
      ...this.productos.guarniciones,
      ...this.productos.burritos,
      ...this.productos.snacks,
      ...this.productos.postres,
      ...this.productos.bebidas,
      ...this.productos.piernas_muslos,
    ];

    const resultado = todosLosProductos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto_buscado) || 
      producto.descripcion?.toLowerCase().includes(texto_buscado)
    );
    return of(resultado);
  }
}
