import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color:string;
  @Input() secondColor:string;

  @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER');
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('MOUSE LEAVE');
    this.changeColor(this.secondColor);
  }

  constructor(public e1: ElementRef) { 
      console.log('Element Ref:', e1);
      this.changeColor('yellow');
  }

  changeColor(color:string){
    this.e1.nativeElement.style.backgroundColor = color;
  }
}