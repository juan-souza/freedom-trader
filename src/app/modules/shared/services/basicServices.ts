import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { environment } from "../../../../environments/environment";


export class BasicServices<T> {


    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        protected http: HttpClient,
        protected API_URL
    ) {
        this.API_URL = environment.apiBaseUrl + this.API_URL;
    }


    insert(record: T) {
        return this.http.post<any>(this.API_URL, record, this.httpOptions)
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.API_URL}/${id}}`);
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.API_URL}`);
    }

    findById(id: number): Observable<T> {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    update(record: T) {
        return this.http.put<any>(`${this.API_URL}/${record['id']}`, record, this.httpOptions)
    }

    save(record: T) {
        if (record['id']) {
            return this.update(record)
        }
        return this.insert(record)
    }
}