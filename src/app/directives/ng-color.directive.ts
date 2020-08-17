import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER');
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('MOUSE LEAVE');
    this.changeColor('red');
  }

  constructor(public e1: ElementRef) { 
      console.log('Element Ref:', e1);
      this.changeColor('yellow');
  }

  changeColor(color:string){
    this.e1.nativeElement.style.backgroundColor = color;
  }
}