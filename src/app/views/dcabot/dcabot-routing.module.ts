import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DcabotComponent} from './dcabot.component';

const routes: Routes = [
  {
    path: '',
    component: DcabotComponent,
    data: {
      title: 'DCA Bot'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcabotRoutingModule {}
