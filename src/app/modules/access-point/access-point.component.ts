import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from '../users/models/user';
import {Subject} from 'rxjs';

import {ModalDirective} from 'ngx-bootstrap/modal';
import {UserService} from '../users/services/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-access-point',
  templateUrl: './access-point.component.html',
  styleUrls: ['./access-point.component.scss']
})
export class AccessPointComponent implements OnDestroy, OnInit {
  @ViewChild('deleteUserModal') public deleteUserModal: ModalDirective;
  dtOptions: DataTables.Settings = {};
  users: User[] = [];
  userDelete: User;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private userService: UserService, private toastr:
    ToastrService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.userService.findAll().subscribe(data => {
      // this.users = (data as any).data;
      this.users = data;

      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  deletePreview(user: User) {
    this.userDelete = user;
    this.deleteUserModal.show();
  }

  delete(id: number) {
    this.deleteUserModal.hide();
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
