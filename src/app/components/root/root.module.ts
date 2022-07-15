import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';
import { LatestTransactionComponent } from './latest-transaction/latest-transaction.component';
import { TransactionMapComponent } from './transaction-map/transaction-map.component';
import { TransactionGraphComponent } from './transaction-graph/transaction-graph.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TransactiondashboardComponent } from './transactiondashboard/transactiondashboard.component';
import { DatePipe } from 'src/app/pipe/date.pipe';

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
    TransactiondashboardComponent,
    DatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TableModule,
    ChartModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    CardModule
  ],
  exports: [RouterModule],
})
export class RootModule { }
