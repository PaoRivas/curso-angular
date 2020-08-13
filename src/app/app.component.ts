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
  sw = true;

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



  ngOnInit(){


  }

}
