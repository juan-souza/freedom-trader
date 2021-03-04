import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StrategiesComponent} from './strategies.component';

const routes: Routes = [
  {
    path: '',
    component: StrategiesComponent,
    data: {
      title: 'Estratégias'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategiesRoutingModule {}
