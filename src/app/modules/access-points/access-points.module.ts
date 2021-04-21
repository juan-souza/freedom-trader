// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccessPointFormComponent } from './access-point-form/access-point-form.component';

// Tabs Component
import { AccessPointsRoutingModule } from './access-points-routing.module';
import { AccessPointsComponent } from './access-points.component';
import { DataTablesModule } from 'angular-datatables';
import { UserService } from '../users/services/user.service';

@NgModule({
  imports: [
    AccessPointsRoutingModule,
    CommonModule,
    DataTablesModule,
    FormsModule,
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
    ModalModule.forRoot()

  ],
  declarations: [
    AccessPointsComponent,
    AccessPointFormComponent

  ], providers: [
    UserService
  ],
})
export class AccessPointsModule {
}
