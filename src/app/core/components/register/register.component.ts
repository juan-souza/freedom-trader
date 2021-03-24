import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../modules/users/models/user';


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
    this.authService.register(this.user.name, this.user.email, this.user.password,)
      .subscribe(res => {
        this.toastr.success('Seu cadastro foi realizado com sucesso!'
          , 'Você receberá um e-mail para confirmar sua conta!', { timeOut: 10000, });

        this.router.navigate(['/login'])

      }, err => {
        this.errors = [err.error.message];
        console.log(this.errors)
        this.errors.forEach(element => {
          this.toastr.error(`${element}`)
        });
      })
  }

  login() {

    this.authService.login(this.user.email, this.user.password)


    this.router.navigate(['/login'])
  }

}
