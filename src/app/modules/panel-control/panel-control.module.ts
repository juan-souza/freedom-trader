import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelControlComponent} from './panel-control.component';
import {PanelControlRoutingModule} from './panel-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [PanelControlComponent],
  imports: [
    PanelControlRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
    CollapseModule,
    BsDropdownModule,
    DataTablesModule
  ]
})
export class PanelControlModule {
}
