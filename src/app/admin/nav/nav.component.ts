import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  enableV = 0;
  notenableV = 0;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onLogout(): void {
    this.authService.logout();
  }

}