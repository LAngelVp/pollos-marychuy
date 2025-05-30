import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ButtonsCategoriesFoodComponent } from '../../components/buttons-categories-food/buttons-categories-food.component';
import { SucursalesComponent } from "../../components/sucursales/sucursales.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    CarruselComponent,
    ButtonsCategoriesFoodComponent,
    SucursalesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  numero_yanga = "2787388303"
  icono_mensaje = "assets/ICONOS/message.svg"
  icono_localizacion = "assets/ICONOS/location_icon.svg"
  iamgen_encabezado_grande = "assets/ILUSTRACIONES/localyanga.jpg";
  ilustracion_localizacion = "assets/ILUSTRACIONES/localizacion.svg"

  mandar_mensaje(){
    const mensaje = "Me gustaría realizar una orden:\n[Coloca lo que deseas ordenar y la direccion exacta]:\n";
    const numero = "2712250569";
    const direccion_url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(direccion_url, '_blank');
  }

  mostrar_ubicacion(){
    const ruta = "https://maps.app.goo.gl/Tzrw5zD21w97bdGJ6";
    window.open(ruta, '_blank');
  }
}
