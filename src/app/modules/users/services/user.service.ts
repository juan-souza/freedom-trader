import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicServices } from '../../shared/services/basicServices';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BasicServices<User> {


  constructor(protected http: HttpClient) {
    super(http, "users");
  }


}
