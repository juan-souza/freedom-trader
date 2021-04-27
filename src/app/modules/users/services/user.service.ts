import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  apiURL: string = environment.apiBaseUrl + 'users/';

  constructor(private http: HttpClient) { }

  insert(user: User) {
    return this.http.post<any>(this.apiURL, user, this.httpOptions)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}}`);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}`);
  }

  findById(id: Number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/${id}`).pipe(take(1));
  }

  update(user: User) {
    return this.http.put<any>(`${this.apiURL}/${user.id}`, user, this.httpOptions)
  }

  save(user: User) {
    if (user.id) {
      return this.update(user)
    }
    return this.insert(user)
  }


}
