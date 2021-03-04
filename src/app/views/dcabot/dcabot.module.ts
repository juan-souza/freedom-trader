// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DcabotComponent } from './dcabot.component';

// Notifications Routing
import {DcabotRoutingModule } from './dcabot-routing.module';

@NgModule({
  imports: [
    DcabotRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [
    DcabotComponent
  ]
})
export class DcabotModule { }
