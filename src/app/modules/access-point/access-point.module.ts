// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import {AccessPointRoutingModule} from './access-point-routing.module';
import {AccessPointComponent} from './access-point.component';
import {DataTablesModule} from 'angular-datatables';
import {UserService} from '../users/services/user.service';

@NgModule({
  imports: [
    AccessPointRoutingModule,
    CommonModule,
    DataTablesModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        progressBar: false,
        progressAnimation: "increasing",
        enableHtml: true,
        positionClass: 'toast-bottom-right',
      }
    ),
    ModalModule.forRoot()

  ],
  declarations: [
    AccessPointComponent

  ], providers: [
    UserService
  ],
})
export class AccessPointModule {
}
