import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, CardComponent, NavComponent, FormComponent]
})
export class AdminModule { }