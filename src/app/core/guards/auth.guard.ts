import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: TokenStorageService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const stateLogin = state.url === '/login';

    if (!stateLogin && !this.auth.isAuth()) {
      this.router.navigate(['/login']);
      return false;
    }
    if (stateLogin && this.auth.isAuth()) {
      this.router.navigate(['/dashboard']);
    }
    return true;
  }
}
