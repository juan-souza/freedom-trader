import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';


const userRoutes: Routes = [
  {

    path: '',
    data: {
      title: 'Usuários',
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: UsersComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'new',
        component: UsersFormComponent,
        data: {
          title: 'Novo'
        }
      },
      {
        path: 'edit/:id',
        component: UsersFormComponent,
        data: {
          title: 'Editar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
