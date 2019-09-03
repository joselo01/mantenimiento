import { Component } from '@angular/core';
import { Persona } from './interfaces/interfaces-personas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona: Persona[] = [
    {codigo: 1, nombre: 'Jose', apellido: 'Mujica', edad: 20},
    {codigo: 2, nombre: 'Miguel', apellido: 'Aguilar', edad: 30},
    {codigo: 3, nombre: 'Carlos', apellido: 'Tafur', edad: 35},
    {codigo: 4, nombre: 'Alejandro', apellido: 'Dominguez', edad: 22},
    {codigo: 5, nombre: 'Fernando', apellido: 'Camacho', edad: 25}
  ];

  selectedPersona: Persona = { codigo: 0, nombre: '', apellido: '', edad: 0};

  openEdit(item: Persona) {
      this.selectedPersona = item;
  }

  addOrEdit() {
    if (this.selectedPersona.codigo === 0) {
      this.selectedPersona.codigo = this.persona.length + 1;
      this.persona.push(this.selectedPersona);
    }
    this.selectedPersona = { codigo: 0, nombre: '', apellido: '', edad: 0};
  }

  delete(): void
  {
    if (confirm('Estás seguro de que quieres eliminarlo?'))
    {
      this.persona = this.persona.filter(x => x !== this.selectedPersona);
      this.selectedPersona = { codigo: 0, nombre: '', apellido: '', edad: 0};
    }
  }

}
