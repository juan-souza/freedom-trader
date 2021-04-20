import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PanelControlComponent} from './panel-control.component';

const routes: Routes = [
  {
    path: '',
    component: PanelControlComponent,
    data: {
      title: 'Painel de Controle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelControlRoutingModule {
}
