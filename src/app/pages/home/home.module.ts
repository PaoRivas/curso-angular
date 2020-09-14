import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../../shared/services/product.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    ProductService
  ]
})
export class HomeModule { }