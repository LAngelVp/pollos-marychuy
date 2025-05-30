import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-piernas-muslos',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './piernas-muslos.component.html',
  styleUrl: './piernas-muslos.component.css'
})
export class PiernasMuslosComponent {
  @Input() productos: any[] = [];
  modalOpen: boolean = false;
  selectedProducto: any = null;
  imagenAmpliada: string | null = null;
  
  openModal(producto: any) {
    console.log(this.productos);
    this.selectedProducto = producto;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProducto = null;
  }
verImagen(imagen: string): void {
  this.imagenAmpliada = imagen;
}

cerrarImagen(): void {
  this.imagenAmpliada = null;
}
}
