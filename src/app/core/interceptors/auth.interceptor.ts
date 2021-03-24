import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: TokenStorageService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.storageService.getToken();
    const isApiUrl = req.url.startsWith(environment.apiBaseUrl)

    if (token && isApiUrl) {
      req = req.clone({ headers: req.headers.set(environment.token_header_key, token) });
    }
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
