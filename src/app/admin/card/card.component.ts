import { Component, Input,  OnInit } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() perrito: any;

  constructor(private adminComponent: AdminComponent) { }

  ngOnInit() {
  }

  onDelete(id: any): void {
    this.adminComponent.onDelete(id);
  }

  onEdit(person: any): void {
    this.adminComponent.onEdit(person);
  }

}