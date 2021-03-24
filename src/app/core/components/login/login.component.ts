import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../../../modules/users/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: User;
  errors: string[]

  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/']);
    }
    this.user = new User()
  }

  onSubmit(): void {
    const { email, password } = this.user;

    this.authService.login(email, password).subscribe(
      data => {
        this.authService.setToken(data);
        this.router.navigate(['/dashboard'])
      },
      err => {
        this.errors = [err.error.message];
        console.log(this.errors)
        this.errors.forEach(element => {
          this.toastr.error(`${element}`)
        });
      }
    );

  }

  reloadPage(): void {
    window.location.reload();
  }
}
