import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  constructor(e1: ElementRef) { 
      console.log('Element Ref:', e1);
      e1.nativeElement.style.backgroundColor = 'yellow';
  }

}