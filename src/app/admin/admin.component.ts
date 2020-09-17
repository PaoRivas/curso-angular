import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  persons = [];

  personForm: FormGroup;

  personSubs: Subscription;
  personGetSubs: Subscription;
  personDeleteSubs: Subscription;
  personUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService) { }

  ngOnInit() {
    this.onGetPersons();
  }

  onGetPersons(): void {
    this.persons = [];
    this.personGetSubs = this.personService.getPersons().subscribe(res => {
      Object.entries(res).map((p: any) => this.persons.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.personDeleteSubs = this.personService.deletePersons(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.onGetPersons();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(person): void {
    this.idEdit = person.id;
    this.personForm.patchValue(person);
  }

  onUpdatePerson(): void {
    this.personUpdateSubs = this.personService.updatePersons(this.idEdit, this.personForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.onGetPersons();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onPostPerson(): void {
    this.personSubs = this.personService.addPersons(this.personForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

}