import { Component } from '@angular/core';

interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
      li:hover{
        background-color: lightblue;
      }
    `
  ]
})
export class SidemenuComponent  {

  templateMenu: MenuItem[]=[
    {
      texto:'Básicos',
      ruta: './template/basicos'
    },
    {
      texto:'Dinámico',
      ruta: './template/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './template/switches'
    }
  ]

  reactiveMenu: MenuItem[]=[
    {
      texto:'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto:'Dinámico',
      ruta: './reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './reactive/switches'
    }
  ]

}
