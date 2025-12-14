import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule, SharedModule, NavigationModule],
})
export class DashboardModule {}
