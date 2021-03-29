// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserService } from './services/user.service';



// Notifications Routing
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
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

  ],
  declarations: [
    UsersComponent

  ], providers: [
    UserService
  ],

})
export class UsersModule { }
