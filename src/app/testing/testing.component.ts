import { Component, OnInit, Input, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `<div>
<p>testing works!</p>

<input type="text">

<p>Valor name: {{name}}</p>
</div>` 
})
export class TestingComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(){
    console.log("OnChanges");
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