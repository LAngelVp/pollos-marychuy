import { Injectable } from '@angular/core';
import { SucursalesInterface } from '../models/sucursales-interface';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  lista_sucursales : SucursalesInterface [] = [
    {
      id: 1,
      nombre: "Sucursal Yanga",
      direccion: "Calle 2 entre avenidas 7 y 9, colonia centro, 94930, Yanga, Ver.",
      url_maps: "https://www.google.com.mx/maps/place/Pollos+Mary+Chuy/@18.8310214,-96.8043005,17z/data=!3m1!4b1!4m6!3m5!1s0x85c4f2540a48768b:0x91ef20c7f5db143f!8m2!3d18.8310214!4d-96.8017256!16s%2Fg%2F11bxgztrjh?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
      contacto: "2787388303"
    },
    {
      id: 2,
      nombre: "Sucursal Cuitlahuac",
      direccion: "Carretera federal Cordoba-Veracruz entrada a valle verde, 94910 Cuitláhuac, Ver.",
      url_maps: "https://www.google.com.mx/maps/place/Pollos+Mary+Chuy/@18.818482,-96.7451536,17z/data=!3m1!4b1!4m6!3m5!1s0x85c48dfc4bafb417:0x95e47ae3ef4eadc0!8m2!3d18.818482!4d-96.7425787!16s%2Fg%2F11mwhl25v9?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
      contacto: "2787320014"
    }
  ]

  constructor() { }

  sucursales(){
    const sucursales = this.lista_sucursales;
    return sucursales;
  }
}
