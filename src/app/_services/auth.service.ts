import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  apiURL: String = environment.apiBaseUrl + 'auth/'

  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiURL + 'signin', {
      username,
      password
    }, this.httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.apiURL + 'signup', {
      username,
      email,
      password
    }, this.httpOptions);
  }

}
