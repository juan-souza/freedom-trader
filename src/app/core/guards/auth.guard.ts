import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: TokenStorageService, private router: Router) {
  }

  canActivate() {
    const stateLogin = this.router.url === '/login';

    if (!stateLogin && !this.auth.isAuth()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
