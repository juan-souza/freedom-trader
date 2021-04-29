import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelControlService {
  apiURL: String = environment.apiBaseUrl + 'exchange';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<[]> {
    return this.http.get<[]>(`${this.apiURL}/balance/all`);
  }
}
