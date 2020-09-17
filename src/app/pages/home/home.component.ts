import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddProduct } from './store/home.actions';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [];

  productSubs: Subscription;
  homeSubs: Subscription;

  cart = [];

  constructor(private store: Store<any>, private productService: ProductService) { }

  ngOnInit(): void {

    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      console.log('AAAAAAAAAAAAA', res);
      this.cart = Object.assign([], res.items);
    });

    this.productSubs = this.productService.getProducts().subscribe(res => {
      console.log('Respuesta: ', res);
      console.log('Respuesta: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  ngOnDestroy(): void{
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  onComprar(product): void{
    this.store.dispatch(AddProduct({product: Object.assign({}, product)}));
  }

}