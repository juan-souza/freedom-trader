import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessPointsComponent} from './access-points.component';
import {AccessPointFormComponent} from './access-point-form/access-point-form.component';

const routes: Routes = [
  {

    path: '',
    data: {
      title: 'Pontos de Acesso',
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: AccessPointsComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'new',
        component: AccessPointFormComponent,
        data: {
          title: 'Novo'
        }
      },
      {
        path: 'edit',
        component: AccessPointFormComponent,
        data: {
          title: 'Editar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessPointsRoutingModule {
}
