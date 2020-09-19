import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class PersonService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<any>{
    return this.http.get(`${this.url}/pets.json`);
  }

  public addPerson(animal: any): Observable<any>{
    return this.http.post(`${this.url}/pets.json`, animal);
  }

  public deletePerson(id: any): Observable<any>{
    return this.http.delete(`${this.url}/pets/${id}.json`);
  }

  public updatePerson(animal: any, id: any): Observable<any>{
    return this.http.put(`${this.url}/pets/${id}.json`, animal);
  }

}