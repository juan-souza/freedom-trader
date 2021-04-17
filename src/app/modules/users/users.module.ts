// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserService } from './services/user.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DataTablesModule } from 'angular-datatables';
import { UsersFormComponent } from './users-form/users-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        progressBar: false,
        progressAnimation: 'increasing',
        enableHtml: true,
        positionClass: 'toast-bottom-right',
      }
    ),
    ModalModule.forRoot(),
    DataTablesModule

  ],
  declarations: [
    UsersComponent,
    UsersFormComponent
  ], providers: [
    UserService
  ],
  exports: [
  ]

})
export class UsersModule { }
