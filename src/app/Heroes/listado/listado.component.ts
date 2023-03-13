import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[]=["Spiderman","IronMan","Hulck","Flash","Wilcar","Sofia"]; 
  nombre:string=""; 
  heroeBorrado:string[]=[]; 
  valor:boolean=false; 

  BorrarHeroes(){
    this.heroeBorrado.push(this.heroes.pop() || "");
  }
}
