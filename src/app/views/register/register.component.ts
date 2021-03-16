import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { User } from '../adm/users/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {

  user: User;

  constructor(private authService: AuthService, private router: Router) {

    this.user = new User();
  }

  onSubmit() {

    this.router.navigate(['/login'])
  }

  login() {
    this.router.navigate(['/login'])
  }

}
