// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OrdersComponent } from './orders.component';

// Notifications Routing
import {OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [
    OrdersComponent
  ]
})
export class OrdersModule { }
