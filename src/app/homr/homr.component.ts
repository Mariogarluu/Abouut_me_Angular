import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './homr.component.html',
  styleUrls: ['./homr.component.css']
})
export class HomrComponent {
  nombre: string = '';
  resultado: string = '';

  mostrarNombre() {
    if (this.nombre.trim() !== '') {
      this.resultado = this.nombre.trim();
    }
  }
}
