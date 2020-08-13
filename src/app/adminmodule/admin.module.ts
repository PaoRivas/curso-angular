import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';
import { Ad3Component } from './ad3/ad3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ad1Component,
    Ad2Component,
    Ad3Component
  ],
  exports: [
    Ad1Component,
    Ad2Component,
    Ad3Component
  ]
})
export class AdminModule { }