import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  @Input() name:string;
  @Input() age:number;
  @Input() desc:string;

  @Output() clickAge = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickSave(){
    this.clickAge.emit({
      name: this.name,
      age: this.age,
      description: this.desc
      });
  }

}