import { Component, Input,  OnDestroy,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  opened = false;
  personForm: FormGroup;
  persons = [];
  eldery = [];
  young = [];
  personSubsGet: Subscription;
  personSubsDelete: Subscription;
  personSubsUpdate: Subscription;
  editId: any;
  pre = [];
  search: string;
  auxE = [];
  auxY = [];

  edit: boolean;

  constructor(private formBuilder: FormBuilder, private personService: PersonService, private authService: AuthService) { }

  ngOnInit() {
    this.edit = false;

    this.loadProducts();

    this.personForm = this.formBuilder.group({
      age: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
      urlImage: '',
      enable: ['', [Validators.required]]
    });
  }

  onSearch() {
      this.loadProducts();
  }

  loadProducts(): void{
    this.pre = this.persons;
    this.persons = [];
    this.personSubsGet = this.personService.getPerson().subscribe(res => {
        Object.entries(res).map((p: any) => this.persons.push({id: p[0], ...p[1]}));
        this.auxE = this.persons.filter((p: any) => p.age > 65 );
        this.auxY = this.persons.filter((p: any) => p.age < 65);

        if(this.search) {
          this.eldery = this.auxE.filter(el => el.name.includes(this.search));
          this.young = this.auxY.filter(el => el.name.includes(this.search));
        } else {
          this.young = this.auxY;
          this.eldery = this.auxE;
        }
      }
    );
    this.opened = false;
  }

  onDelete(id: any): void{
    this.personSubsDelete = this.personService.deletePerson(id).subscribe(
      res => {
        this.loadProducts();
      },
      error => {
        console.log('ERROR', error);
      }
    );
  }

  onUpdateProduct(): void {
    this.personSubsUpdate = this.personService.updatePerson({
      ...this.personForm.value,
      ownerId: this.authService.getUserId()
    }, this.editId).subscribe(
      res => {
        console.log('RES UPDATE', res);
        this.loadProducts();
      },
      error => {
        console.log('ERROR UPDATE', error);
      }
    );
  }

  onEdit(person: any): void{
    this.editId = person.id;
    this.personForm.patchValue(person);
    this.edit = true;
    this.opened = !this.opened;
  }

  ngOnDestroy(): void {
    this.personSubsGet ? this.personSubsGet.unsubscribe() : '';
    this.personSubsDelete ? this.personSubsDelete.unsubscribe() : '';
    this.personSubsUpdate ? this.personSubsUpdate.unsubscribe() : '';

  }

  notEdit(): void{
    this.edit = false;
    this.editId = '';
    this.personForm.patchValue({
      age: '',
      name: '',
      urlImage: '',
      enable: ''
    });
  }

}