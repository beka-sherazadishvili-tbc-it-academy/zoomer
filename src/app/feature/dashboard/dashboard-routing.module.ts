import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TradePolicyComponent } from '../header/components/trade-policy/trade-policy.component';
import { InstallmentComponent } from '../header/components/installment/installment.component';
import { TradeInComponent } from '../header/components/trade-in/trade-in.component';
import { CareerComponent } from '../header/components/career/career.component';
import { BranchesComponent } from '../header/components/branches/branches.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'info/trading-policy', component: TradePolicyComponent },
      { path: 'info/installment', component: InstallmentComponent },
      { path: 'info/trade-in', component: TradeInComponent },
      { path: 'info/career', component: CareerComponent },
      { path: 'info/branches', component: BranchesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
