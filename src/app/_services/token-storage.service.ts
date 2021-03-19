import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  access_token: string = environment.access_token;

  constructor() {
  }

  signOut(): void {
    localStorage.clear();
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

  public isAuth(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
