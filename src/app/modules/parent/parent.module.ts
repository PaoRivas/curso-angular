import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from './components/parent1/parent1.component';
import { Parent2Component } from './components/parent2/parent2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Parent1Component,
    Parent2Component
  ]
})
export class ParentModule { }