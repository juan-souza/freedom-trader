import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: String = environment.apiBaseUrl + 'users/';

  constructor(private http: HttpClient) { }

  insert() { }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}}`);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}`);
  }

  findById(id: Number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/${id}`);
  }

  update() { }


}
