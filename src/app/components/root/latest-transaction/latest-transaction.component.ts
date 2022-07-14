import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'src/app/serviceses/transaction.service';

@Component({
  selector: 'app-latest-transaction',
  templateUrl: './latest-transaction.component.html',
  styleUrls: ['./latest-transaction.component.css'],
})
export class LatestTransactionComponent implements OnInit {
  transactions!: any;
  allTransactions: any = [];
  searchText: string = '';

  @ViewChild("transactionTable") transactionTable !: any;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.searchText = '';
    this.transactions = [];
    this.transactionService.get().subscribe((res: any) => {
      this.transactions = res['success'];
      this.allTransactions = JSON.parse(JSON.stringify(this.transactions));
    });
  }
  clear(table: any) {
    this.searchText = '';
    table.clear();
  }

  refreshTable(event: any) {
    this.searchText = event.label;
    if(event.exploded) {
      this.transactions = this.allTransactions.filter((e : any) => e.imeiNumber == event.label);
    } else {
      this.searchText = "";
      this.transactions = JSON.parse(JSON.stringify(this.allTransactions));
    }
  }
}
