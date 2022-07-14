import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'src/app/serviceses/transaction.service';

@Component({
  selector: 'app-transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.css'],
})
export class TransactionGraphComponent implements OnInit {
  header = 'Hedaer Demo';
  zoom: boolean = false;
  data: any;
  graphType: string = 'line';
  graphTypes = ['pie', 'bar'];
  transactions: any = [];
  basicOptions: any;

  @ViewChild('voltageChart') voltageChart: any;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe((res: any) => {
      this.transactions = res['success'];
      let dataGroup = this.groupBy(this.transactions, (t: any) => t.imeiNumber);

      this.data = {
        labels: [],
        datasets: [],
      };
      dataGroup.forEach((value: any, key: string) => {
        if ('32432423423432423423\n4' == key) {
          let currentData: any = {};
          currentData.label = key;
          currentData.fill = false;
          currentData.tension = 0.4;
          currentData.data = [];
          currentData.borderColor = this.generateRandomColor();
          for (let v of value) {
            let voltage = this.getNumberValue(v.pvOrDCVoltage);
            let current = this.getNumberValue(v.pvCurrent);

            let data = voltage * current;
            currentData.data.push(data);
          }
          if (currentData.data.length != 0) {
            this.data.labels.push(key);
            this.data.datasets.push(currentData);
          }
        }
      });
    });
  }
  getNumberValue(ele: string): number {
    let nValue: string = '';

    if (ele) {
      for (let index = 0; index < ele.length; index++) {
        let cEle = ele[index];
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(cEle)) {
          nValue = nValue + cEle;
        } else {
          break;
        }
      }
    } else {
      return 0;
    }
    return Number(nValue);
  }

  groupBy(list: any, keyGetter: any) {
    const map = new Map();
    list.forEach((item: any) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  reinit() {
    setTimeout(() => {
      this.voltageChart.reinit();
    }, 10);
  }

  generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
