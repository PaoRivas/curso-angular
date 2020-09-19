import { Component, Input,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() report: boolean;

  enableV = 0;
  notenableV = 0;
  storeSub: Subscription;

  constructor(private authService: AuthService, private store: Store<any>) { }

  ngOnInit() {
    this.storeSub = this.store.select(s => s.admin).subscribe(res => {
      this.enableV = 0;
      this.notenableV = 0;
      this.enableV = res.enableV;
      this.notenableV = res.notenableV;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.storeSub ? this.storeSub.unsubscribe() : '';
  }

}