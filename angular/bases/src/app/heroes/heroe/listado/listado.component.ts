import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];

  heroeBorrado: string = '';//crear propiedad de la variable que se utilizo en la
  // funcion borrarHeroe()


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';


  }
}
