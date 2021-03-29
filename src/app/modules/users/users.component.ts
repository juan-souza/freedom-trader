import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  userDelete: User

  constructor(private userService: UserService, private toastr:
    ToastrService,) { }

  ngOnInit(): void {

    this.userService.findAll().subscribe(resp => {
      this.users = resp;
    }), error => {
      this.toastr.error('Não foi possível carregar os Usuários!')
    }
  }


  deletePreview(user: User) {
    console.log(user)
    this.userDelete = user;
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(
      (response) => {
        this.toastr.success(`Usuário <b>${this.userDelete.name}</b> deletado com sucesso!`);
        this.ngOnInit();
      },
      (error) => {
        this.toastr.error('Ocorreu um erro ao deletar o Usuário.');
      }
    );
  }

}
