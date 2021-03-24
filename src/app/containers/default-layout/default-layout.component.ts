import {Component} from '@angular/core';
import {navItems} from '../../_nav';
import {TokenStorageService} from '../../core/services/token-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(
    private tokenStorage: TokenStorageService) {
  }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  signOut(): void {
    this.tokenStorage.signOut();
  }

}
