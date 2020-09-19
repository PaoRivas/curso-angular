import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class PersonService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<any> {
    return this.http.get(`${this.url}/persons.json`);
  }

  public addPerson(person: any): Observable<any> {
    return this.http.post(`${this.url}/persons.json`, person);
  }

  public deletePerson(id: any): Observable<any> {
    return this.http.delete(`${this.url}/persons/${id}.json`);
  }

  public updatePerson(id: any, person: any): Observable<any> {
    return this.http.put(`${this.url}/persons/${id}.json`, person);
  }

}