import { Component, OnInit } from '@angular/core';
import { from, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';
  name = 'Paola';
  lastName = 'Rivas';
  sw = true;

  numbers = [1,2,3,4,5,6,7,8,9,10];

  persons = [
    {
      name: 'paola',
      lastName: 'rivas',
      age: 22,
      enable: true
    },
    {
      name: 'paola',
      lastName: 'rivas',
      age: 22,
      enable: true
    },
    {
      name: 'paola',
      lastName: 'rivas',
      age: 22,
      enable: false
    },
    {
      name: 'paola',
      lastName: 'rivas',
      age: 22,
      enable: false
    }
  ]

  auxNumber: number;
  auxExponent: number;

  ngOnInit(){


  }

}
