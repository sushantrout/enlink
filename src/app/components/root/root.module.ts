import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';
import { LatestTransactionComponent } from './latest-transaction/latest-transaction.component';
import { TransactionMapComponent } from './transaction-map/transaction-map.component';
import { TransactionGraphComponent } from './transaction-graph/transaction-graph.component';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RootComponent,
  },
];

@NgModule({
  declarations: [
    LatestTransactionComponent,
    TransactionMapComponent,
    TransactionGraphComponent,
    RootComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), TableModule],
  exports: [RouterModule],
})
export class RootModule {}
