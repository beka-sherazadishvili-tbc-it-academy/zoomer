import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradePolicyComponent } from './components/trade-policy/trade-policy.component';
import { InstallmentComponent } from './components/installment/installment.component';
import { TradeInComponent } from './components/trade-in/trade-in.component';
import { CareerComponent } from './components/career/career.component';
import { BranchesComponent } from './components/branches/branches.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
