import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  apiURL: String = environment.apiBaseUrl + 'auth/'

  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiURL + 'login', {
      email,
      password
    }, this.httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    const register_conde: String = "botcrypto";
    return this.http.post<any>(this.apiURL + 'register', {
      username,
      email,
      password,
      register_conde

    }, this.httpOptions);
  }



}
