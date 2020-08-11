import { Component, OnInit } from '@angular/core';
import { from, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  sw = true;

  persons = [1,2,3,4,5]

  aux = 3;

  auxColor = 'red';

  ngOnInit(){


  }

}
