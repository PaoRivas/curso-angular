import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  products = [];
  productService: ProductService;
  productForm: FormGroup;
  productSubs: Subscription;
  productGetSubs: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      console.log('Respuesta: ', res);
      console.log('Respuesta: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
   }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description:['', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  onEnviar2(){
    console.log('FORM GROUP: ', this.productForm.value);

    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    )
  }

  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe(): '';
    this.productGetSubs ? this.productGetSubs.unsubscribe(): '';
  }

}