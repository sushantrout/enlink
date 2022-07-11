import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/serviceses/transaction.service';

@Component({
  selector: 'app-latest-transaction',
  templateUrl: './latest-transaction.component.html',
  styleUrls: ['./latest-transaction.component.css']
})
export class LatestTransactionComponent implements OnInit {

  transactions !:any;
  constructor(private transactionService : TransactionService) { }

  ngOnInit(): void {
    this.transactions = [];
    this.transactionService.get().subscribe((res : any) => {
      this.transactions = res['success'];
    });
  }

}
