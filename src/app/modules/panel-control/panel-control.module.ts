import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelControlComponent} from './panel-control.component';
import {PanelControlRoutingModule} from './panel-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [PanelControlComponent],
  imports: [
    PanelControlRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ]
})
export class PanelControlModule {
}
