import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessPointRoutingModule } from './access-point-routing.module';
import { AccessPointComponent } from './access-point.component';


@NgModule({
  declarations: [AccessPointComponent],
  imports: [
    CommonModule,
    AccessPointRoutingModule
  ]
})
export class AccessPointModule { }
