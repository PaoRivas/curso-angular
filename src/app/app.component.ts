import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from './services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  students = [];
  idEdit: any;

  studentsForm: FormGroup;

  studentSubs: Subscription;
  studentGetSubs: Subscription;
  studentDeleteSubs: Subscription;
  studentUpdateSubs: Subscription;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {}

  ngOnInit() {

    this.onGetStudents();

    this.studentsForm = this.formBuilder.group({
      age: '',
      grade: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      urlImage: ''
    })
  }

  onGetStudents(): void {
    this.students = [];
    this.studentGetSubs = this.studentService.getStudents().subscribe(res => {
      Object.entries(res).map((p: any) => this.students.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.studentDeleteSubs = this.studentService.deleteStudent(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.onGetStudents();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(student): void {
    this.idEdit = student.id;
    this.studentsForm.patchValue(student);
  }

  onUpdateStudent(): void {
    this.studentUpdateSubs = this.studentService.updateStudent(this.idEdit, this.studentsForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.onGetStudents();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onPostStudent(): void {
    this.studentSubs = this.studentService.addStudent(this.studentsForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }
}
