import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private authService: AuthService, private router: Router) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
