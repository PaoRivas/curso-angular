import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: '',
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  onEnviar2(){
    console.log('FORM GROUP: ', this.productForm.value)
  }

}