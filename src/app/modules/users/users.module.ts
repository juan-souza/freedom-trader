// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Notifications Routing
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
    FormsModule
  ],
  declarations: [

  ]
})
export class UsersModule { }
