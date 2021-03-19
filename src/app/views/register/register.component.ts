import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../_services/auth.service';
import { User } from '../adm/users/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {

  user: User;
  errors: string[]

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,) {

    this.user = new User();
  }

  onSubmit() {
    this.authService.register(this.user.username, this.user.password, this.user.email)
      .subscribe(res => {
        this.toastr.success('Seu cadastro foi realizado com sucesso!'
          , 'Você receberá um e-mail para confirmar sua conta!', { timeOut: 10000, });

        this.router.navigate(['/login'])

      }, err => {
        this.errors = [err.error.message];
      })
  }

  login() {

    this.authService.login(this.user.email, this.user.password)


    this.router.navigate(['/login'])
  }

}
