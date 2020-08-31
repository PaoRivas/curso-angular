import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  
  sw = true;

  constructor() { }

  ngOnInit() {
  }

  onLogin(): void{
    console.log('USERNAME: ', this.username);
    console.log('PASSWORD: ', this.password);
  }

  onLogin2(form): void{
    console.log('VARIABLE LOCAL FORM: ', form.value);
  }
}