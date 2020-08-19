import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';
  total:number = 0;

  students = [
{nombre: "juan", edad: 13, grado: "P"},
{nombre: "marco", edad: 15, grado: "S"},
{nombre: "maria", edad: 20, grado: "P"},
{nombre: "marta", edad: 22, grado: "S"},
{nombre: "omar", edad: 18, grado: "P"},
{nombre: "miriam", edad: 16, grado: "S"},
{nombre: "roger", edad: 18, grado: "P"},
{nombre: "julieta", edad: 20, grado: "S"},
{nombre: "eber", edad: 22, grado: "P"},
{nombre: "juana", edad: 25, grado: "S"}
]

auxP = this.students.filter(s => s.grado === "P").length;
auxS = this.students.filter(s => s.grado === "S").length;


onClickSaveChild(event){
    this.total = this.total + 1;
    console.log(event);
    var index = this.students.findIndex(s => s.nombre === event.toLocaleLowerCase());
    console.log(index)
    this.students.splice(index, 1);
  }	 
}



