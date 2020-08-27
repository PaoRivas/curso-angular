import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {
      description: 'Muy ricas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 10,
      title: 'Salteñas'
    },
    {
      description: 'Muy ricas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 10,
      title: 'Salteñas'
    },
    {
      description: 'Muy ricas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 10,
      title: 'Salteñas'
    },
    {
      description: 'Muy ricas',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 10,
      title: 'Salteñas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}