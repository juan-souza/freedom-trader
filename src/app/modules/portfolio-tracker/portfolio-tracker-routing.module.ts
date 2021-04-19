import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioTrackerComponent} from './portfolio-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioTrackerComponent,
    data: {
      title: 'Portfolio Tracker'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioTrackerRoutingModule {
}
