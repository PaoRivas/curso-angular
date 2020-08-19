import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, Input, Output {

  @Input() name:string;
  @Input() age:number;
  @Input() grade:string;

  @Output() clickInscribir = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onClickSave(){
  this.clickInscribir.emit(this.name);
}

}