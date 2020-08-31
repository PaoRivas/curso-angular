import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): any[]{

    return [
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

  }

}