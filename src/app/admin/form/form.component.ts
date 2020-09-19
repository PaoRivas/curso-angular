import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { PersonService } from '../../services/person.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  @Input() personForm: FormGroup;

  @Input() edit: boolean;

  personSubs: Subscription;

  constructor(private personService: PersonService, private authService: AuthService, private adminComponent: AdminComponent) { }

  ngOnInit() {
  }

  onEnviar(): void {
    this.personSubs = this.personService.addPerson({
      ...this.personForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        this.adminComponent.loadProducts();
      },
      error => {
        console.log('ERROR DE SERRVIDOR', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.personSubs ? this.personSubs.unsubscribe() : '';
  }

  onUpdateProduct(): void {
    this.adminComponent.onUpdateProduct();
  }

}