import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { TradePolicyComponent } from './components/trade-policy/trade-policy.component';
import { InstallmentComponent } from './components/installment/installment.component';
import { TradeInComponent } from './components/trade-in/trade-in.component';
import { CareerComponent } from './components/career/career.component';
import { BranchesComponent } from './components/branches/branches.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderRoutingModule],
})
export class HeaderModule {}
