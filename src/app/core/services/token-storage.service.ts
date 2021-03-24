import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  access_token: string = environment.access_token;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() {
  }

  removeToken(): void {
    localStorage.removeItem(this.access_token);
  }

  getToken(): string | null {
    if (this.getTokenStorage() == null) {
      return null
    }
    else {
      const token = JSON.parse(this.getTokenStorage())
      return token.access_token;
    }
  }

  setToken(token: string): void {
    localStorage.setItem(this.access_token, JSON.stringify(token));
  }

  getTokenStorage() {
    return localStorage.getItem(this.access_token);
  }

  isTokenExpired(): boolean {
    const token = this.getToken()
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token)
      return !expired;
    }
    return false;
  }

}
