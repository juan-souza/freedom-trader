import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {BasicServices} from '../../shared/services/basicServices';
import {AccessPoint} from '../models/AccessPoint';

@Injectable({
  providedIn: 'root'
})
export class AccessPointService extends BasicServices<AccessPoint> {

  apiURL: String = environment.apiBaseUrl + 'access-point';

  constructor(protected http: HttpClient) {
    super(http, 'access-point');
  }

  getExchanges(): Observable<AccessPoint[]> {
    return this.http.get<AccessPoint[]>(`${this.apiURL}/exchange/all`);
  }

}
