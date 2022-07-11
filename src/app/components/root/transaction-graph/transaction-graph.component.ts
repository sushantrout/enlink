import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.css'],
})
export class TransactionGraphComponent implements OnInit {
  header = 'Hedaer Demo';
  zoom: boolean = false;
  data: any = [];
  graphType: string = 'pie';
  graphTypes = ['pie', 'bar'];

  @ViewChild('voltageChart') voltageChart: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };
  }
  reinit(){
    setTimeout(() => {
      this.voltageChart.reinit();
    }, 10);
  }
}
