import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers

import { AuthGuard } from './core/guards/auth.guard';

import { P404Component } from './core/components/error/404.component';
import { P500Component } from './core/components/error/500.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ForgotPasswordComponent } from './core/components/forgot/forgot-password.component';
import { DefaultLayoutComponent } from './modules/default-layout';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forget-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'panel-control',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/panel-control/panel-control.module').then(m => m.PanelControlModule)
      },
      {
        path: 'access-points',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/access-points/access-points.module').then(m => m.AccessPointsModule)
      },
      {
        path: 'portfolio-tracker',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/portfolio-tracker/portfolio-tracker.module').then(m => m.PortfolioTrackerModule)
      },
      {
        path: 'dcabot',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/dcabot/dcabot.module').then(m => m.DcabotModule)
      },
      {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule)
      },
      {
        path: 'strategies',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/strategies/strategies.module').then(m => m.StrategiesModule)
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/zold/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/zold/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/zold/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },

      {
        path: 'icons',
        loadChildren: () => import('./views/zold/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/zold/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/zold/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
