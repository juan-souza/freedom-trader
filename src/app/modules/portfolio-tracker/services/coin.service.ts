import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) {
  }

  getCoinSymbols(exchange, pair): Observable<[]> {
    return this.http
      .get(`https://api.coincap.io/v2/markets?exchangeId=${exchange}&assetSymbol=${pair}&limit=300`)
      .pipe(map((result) => Object.values(result)[0]));
  }

}
