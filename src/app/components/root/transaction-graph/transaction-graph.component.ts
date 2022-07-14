import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'src/app/serviceses/transaction.service';
import { TransactionUtil } from 'src/app/util/transaction.util';
declare var CanvasJS: any;

@Component({
  selector: 'app-transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.css'],
})
export class TransactionGraphComponent implements OnInit {
  header = 'Power';
  zoom: boolean = false;
  data: any;
  graphType: string = 'line';
  graphTypes = ['pie', 'bar'];
  transactions: any = [];
  basicOptions: any;

  chart1: any;
  chart2: any;

  transactionUtil = new TransactionUtil();
  @ViewChild('voltageChart') voltageChart: any;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe((res: any) => {
      this.transactions = res['success'];
      this.chart1 = this.randerChart('chartContainer');
      this.chart1.render();
    });
  }
  randerChart(id?: string) {
    let datasets: any = [];
    let dataGroup = this.transactionUtil.groupBy(
      this.transactions,
      (t: any) => t.imeiNumber
    );

    dataGroup.forEach((value: any, key: string) => {
      let data: any = {
        name: key,
        type: 'spline',
        showInLegend: true,
      };

      data['dataPoints'] = [];
      for (let val of value) {
        let voltage = this.transactionUtil.getNumberValue(val.pvOrDCVoltage);
        let current = this.transactionUtil.getNumberValue(val.pvCurrent);

        let power = voltage * current;
        let cP = {
          x: new Date(this.transactionUtil.converToDate(val.date)),
          y: power,
        };
        data.dataPoints.push(cP);
      }

      datasets.push(data);
    });

    let cur = this;

    let chartData = {
      animationEnabled: true,
      title: {
        text: 'Power',
      },
      axisX: {
        valueFormatString: 'DD MMM,YY HH:mm:ss',
        labelAngle: 130,
      },
      axisY: {
        title: 'Power',
        suffix: ' WATT',
      },
      legend: {
        cursor: 'pointer',
        fontSize: 13,
        itemclick: cur.toggleDataSeries.bind(this),
      },
      toolTip: {
        shared: true,
      },
      data: datasets,
    };
    return new CanvasJS.Chart(id, chartData);
  }

  toggleDataSeriesLarge(e: any) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart1.render();
  }

  toggleDataSeries(e: any) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    if(!document.getElementById('zoomChartContainer')) {
      this.chart1.render();
    } else {
      if(this.chart2) {
        this.chart2.render()
      }
    }
  }

  reinit() {
    setTimeout(() => {
      this.voltageChart.reinit();
    }, 10);
  }

  zoomGraph() {
    this.zoom = true;
    setTimeout(() => {
      this.chart2 = this.randerChart('zoomChartContainer');
      this.chart2.render();
    }, 1);
  }
}
