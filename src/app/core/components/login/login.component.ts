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
  isLoggedIn = false;
  isLoginFailed = false;
  errors: string[];


  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    // if (!this.tokenStorage.getToken()) {
    //   this.router.navigate(['/']);
    // }
    this.user = new User();
  }

  onSubmit(): void {
    const {email, password} = this.user;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.setToken(data.token);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.reloadPage();
      },
      err => {
        this.errors = [err.error.message];
        this.errors.forEach(element => {
          this.toastr.error(`${element}`);
        });
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
