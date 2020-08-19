import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, Input {

  @Input() name:string;
  @Input() age:number;
  @Input() grade:string;

  constructor() { }

  ngOnInit() {
  }

}