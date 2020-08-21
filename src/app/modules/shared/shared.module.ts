import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './componente/shared.component';
import { SharedDirective } from './shared.directive';
import { SharedPipe } from './shared.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    SharedDirective,
    SharedPipe
  ],
  exports: [
    SharedComponent,
    SharedDirective,
    SharedPipe
  ]
})
export class SharedModule { }