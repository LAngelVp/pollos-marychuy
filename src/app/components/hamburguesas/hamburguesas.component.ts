import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburguesas',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './hamburguesas.component.html',
  styleUrl: './hamburguesas.component.css'
})
export class HamburguesasComponent {
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
