import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../_services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
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
