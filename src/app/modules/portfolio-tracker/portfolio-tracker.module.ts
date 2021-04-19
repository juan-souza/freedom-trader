import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioTrackerComponent} from './portfolio-tracker.component';
import {PortfolioTrackerRoutingModule} from './portfolio-tracker-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [PortfolioTrackerComponent],
  imports: [
    PortfolioTrackerRoutingModule,
    CommonModule,
    TabsModule.forRoot()
  ]
})
export class PortfolioTrackerModule {
}
