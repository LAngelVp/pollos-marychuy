import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../../services/sucursales.service';
import { SucursalesInterface } from '../../models/sucursales-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.css'
})
export class SucursalesComponent implements OnInit{
  ilustracion_localizacion = "assets/ILUSTRACIONES/localizacion.svg"
  sucursales : SucursalesInterface[] =  [];
  constructor(private sucursalesService: SucursalesService){}

  ngOnInit(): void {
      this.sucursales = this.sucursalesService.sucursales();
  }

  mandarMensaje(sucursal: SucursalesInterface) {
    const mensaje = `Me gustaría realizar una orden para ${sucursal.nombre}:\n[Coloca lo que deseas ordenar y la dirección exacta]:\n`;
    const direccion_url = `https://wa.me/${sucursal.contacto}?text=${encodeURIComponent(mensaje)}`;
    window.open(direccion_url, '_blank');
  }

  mostrarUbicacion(sucursal: SucursalesInterface) {
    window.open(sucursal.url_maps, '_blank');
  }

}
