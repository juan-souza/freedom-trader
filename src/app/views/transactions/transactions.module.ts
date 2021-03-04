// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TransactionsComponent } from './transactions.component';

// Notifications Routing
import {TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  imports: [
    TransactionsRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
