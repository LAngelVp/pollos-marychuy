import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alitas-boneless',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './alitas-boneless.component.html',
  styleUrl: './alitas-boneless.component.css'
})
export class AlitasBonelessComponent {
  salsas_imagen = "assets/ILUSTRACIONES/Salsas.svg";
  text_salsas = "Salsas para las alitas y boneless";
  @Input() productos: any[] = [];
  modalOpen: boolean = false;
  selectedProducto: any = null;
  
  
  openModal(producto: any) {
    console.log(this.productos);
    this.selectedProducto = producto;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProducto = null;
  }
}
