import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TryingFinanceComponent } from './trying-finance/trying-finance.component';

const routes: Routes = [
  {
    path: 'tada',
    component: TryingFinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
