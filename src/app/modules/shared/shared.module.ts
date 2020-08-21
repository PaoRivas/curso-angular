import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './componente/shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }