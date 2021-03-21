import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../core/_services/token-storage.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: TokenStorageService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.storageService.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(environment.token_header_key, token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
