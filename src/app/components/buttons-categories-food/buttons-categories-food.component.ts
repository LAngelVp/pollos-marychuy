import { Component } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductosInterface } from '../../models/productos-interface';
import { CommonModule } from '@angular/common';
import { HamburguesasComponent } from '../hamburguesas/hamburguesas.component';
import { PiernasMuslosComponent } from '../piernas-muslos/piernas-muslos.component';
import { PollosComponent } from '../pollos/pollos.component';
import { AlitasBonelessComponent } from '../alitas-boneless/alitas-boneless.component';
import { BebidasComponent } from '../bebidas/bebidas.component';
import { GuarnicionesComponent } from '../guarniciones/guarniciones.component';
import { BurritosComponent } from '../burritos/burritos.component';
import { SnacksComponent } from '../snacks/snacks.component';
import { PostresComponent } from '../postres/postres.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buttons-categories-food',
  standalone: true,
  imports: [
    HamburguesasComponent,
    PiernasMuslosComponent,
    PollosComponent,
    AlitasBonelessComponent,
    BebidasComponent,
    GuarnicionesComponent,
    BurritosComponent,
    SnacksComponent,
    PostresComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './buttons-categories-food.component.html',
  styleUrl: './buttons-categories-food.component.css'
})
export class ButtonsCategoriesFoodComponent {
dato_a_buscar: string = '';
  categoriaActual: string = '';
  productos: any[] = [];
  
  constructor (private productosServicio: ProductosServiceService) {}

  mostrarProductos(categoria: keyof ProductosInterface): void {
    this.productosServicio.mostrarProductos(categoria).subscribe((productos) => {
      console.log('Productos de', categoria, productos);
      this.productos = productos;
      this.categoriaActual = categoria;
    });
  }

  buscarProducto(): void {
    if (this.dato_a_buscar.trim() !== '') {
      this.productosServicio.buscar_producto(this.dato_a_buscar).subscribe((productos) => {
        this.productos = productos;
        console.log(this.productos)
      });
    } 
  }
}
