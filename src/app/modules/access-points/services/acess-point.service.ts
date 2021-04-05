import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {AccessPoint} from '../models/AccessPoint';

@Injectable({
  providedIn: 'root'
})
export class AccessPointService {

  apiURL: String = environment.apiBaseUrl + 'access-point/';

  constructor(private http: HttpClient) {
  }

  insert() {
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}}`);
  }

  findAll(): Observable<AccessPoint[]> {
    return this.http.get<AccessPoint[]>(`${this.apiURL}`);
  }

  findById(id: Number): Observable<AccessPoint> {
    return this.http.get<AccessPoint>(`${this.apiURL}/${id}`);
  }

  update() {
  }


}
