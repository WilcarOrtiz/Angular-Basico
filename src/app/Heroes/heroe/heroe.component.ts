import { Component } from '@angular/core';

@Component({
    selector:"app-heore",
    templateUrl: "heroe.Component.html"
})


export class HeroeComponent{
    nombre:string ="Iron Man"; 
    edad : number=45; 


    
  get NombreCapitalizado() : string {
        return this.nombre.toUpperCase(); 
    }
    

    CambiarNombre():void{
        this.nombre ="SpiderMan";
    }


    CambiarEdad():void{
        this.edad =20;
    }

    ObtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }
    
}