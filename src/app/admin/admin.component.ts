import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  report = false;
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

  edit: boolean;

  constructor(private formBuilder: FormBuilder, private personService: PersonService, private authService: AuthService,
              private store: Store<any>) { }

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

  loadProducts(): void{
    this.pre = this.persons;
    this.persons = [];
    this.personSubsGet = this.personService.getPerson().subscribe(res => {
        Object.entries(res).map((p: any) => this.persons.push({id: p[0], ...p[1]}));
        this.eldery = this.persons.filter((p: any) => p.vaccinated === true || p.vaccinated === 'true');
        this.young = this.persons.filter((p: any) => !p.vaccinated || p.vaccinated === 'false');

        this.store.dispatch(EmptyStore());
        for (const p of this.persons){
          this.store.dispatch(AddAnimal({animal: p}));
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