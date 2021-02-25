// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UsersComponent } from './users.component';

// Notifications Routing
import {UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
