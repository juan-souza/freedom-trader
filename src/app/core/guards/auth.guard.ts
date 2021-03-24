import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const stateLogin = state.url === '/login';

    if (!stateLogin && !this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    if (stateLogin && this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    return true;
  }
}
