import { Component, OnInit, Input, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `<div>
<p>testing works!</p>

<input type="text">

<p>Valor name: {{name}}</p>
<p>Valor last name: {{lastname}}</p>
</div>` 
})
export class TestingComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

 intermediaria:string;

  @Input()
    get name(){
      return this.intermediaria
    }
    set name(name:string){
      this.intermediaria = 'aa' + name;
    }

  @Input() lastname:string;

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChange){
    if (changes && changes.lastname && changes.lastname.currentValue){
    console.log("OnChanges", changes.lastname.currentValue);
    const aux = 'AAAA' + changes.lastname.currentValue;
    this.lastname = aux;
    }
  }

  ngDoCheck(){
    console.log("DoCheck");
  }

  ngAfterContentInit(){
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("OnDestroy");
  }
}