import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() {
  }

  signOut(): void {
    localStorage.clear();
  }

  getToken(): string | null {
    const token = JSON.parse(this.getTokenStorage())
    return token.access_token;
  }

  setToken(token: string): void {
    localStorage.setItem(environment.access_token, JSON.stringify(token));
  }

  getTokenStorage() {
    return localStorage.getItem(environment.access_token);
  }

  public isAuth(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
