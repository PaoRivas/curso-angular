import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../shared/services/product.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    ProductService
  ]
})
export class HomeModule { }