import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: String = environment.apiBaseUrl + 'users/'

  constructor(private http: HttpClient) { }




  findAll(): Observable<User[]> {
    return null
  }



}
