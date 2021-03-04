// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StrategiesComponent } from './strategies.component';

// Notifications Routing
import {StrategiesRoutingModule } from './strategies-routing.module';

@NgModule({
  imports: [
    StrategiesRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [
    StrategiesComponent
  ]
})
export class StrategiesModule { }
