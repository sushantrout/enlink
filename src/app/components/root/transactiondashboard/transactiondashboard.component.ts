import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/serviceses/transaction.service';
import { TransactionUtil } from 'src/app/util/transaction.util';

declare var CanvasJS: any;

@Component({
  selector: 'app-transactiondashboard',
  templateUrl: './transactiondashboard.component.html',
  styleUrls: ['./transactiondashboard.component.css'],
})
export class TransactiondashboardComponent implements OnInit {
  chart1: any;
  transactions: any;
  transactionUtil = new TransactionUtil();
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe((res: any) => {
      this.transactions = res['success'];
      let datasets: any = [];
      let dataGroup = this.transactionUtil.groupBy(
        this.transactions,
        (t: any) => t.imeiNumber
      );

      let dataMap: any = {};

      dataGroup.forEach((value: any, key: string) => {
        let totalPower = 0;
        let totalCurrent = 0;
        let totalVoltage = 0;

        for (let val of value) {
          let voltage = this.transactionUtil.getNumberValue(val.pvOrDCVoltage);
          let current = this.transactionUtil.getNumberValue(val.pvCurrent);

          totalVoltage = totalVoltage + voltage;
          totalCurrent = totalCurrent + current;

          totalPower = totalPower + voltage * current;
        }

        dataMap[key] = {};
        dataMap[key]['totalVoltage'] = totalVoltage;
        dataMap[key]['totalCurrent'] = totalCurrent;
        dataMap[key]['totalPower'] = totalPower;
      });


      let voltageDataPoints : any= [];
      let currentDataPoints : any= [];
      let powerDataPoints : any= [];

      dataGroup.forEach((value: any, key: string) => {
        let currentVoltageData = {
          label: key,
          y: dataMap[key]['totalVoltage']
        }

        let currentCurrentData = {
          label: key,
          y: dataMap[key]['totalCurrent']
        }

        let currentPowerDataPoints = {
          label: key,
          y: dataMap[key]['totalPower']
        }
        voltageDataPoints.push(currentVoltageData);
        currentDataPoints.push(currentCurrentData);
        powerDataPoints.push(currentPowerDataPoints);

      })

      let voltageData = {
        animationEnabled: true,
        title: {
          text: 'Voltage',
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "",
          indexLabel: "{label} {y}",
          dataPoints: voltageDataPoints
        }]
      };

      let currentData = {
        animationEnabled: true,
        title: {
          text: 'Current',
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "",
          indexLabel: "{label} {y}",
          dataPoints: currentDataPoints
        }]
      };

      let powerData = {
        animationEnabled: true,
        title: {
          text: 'Power',
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "",
          indexLabel: "{label} {y}",
          dataPoints: powerDataPoints
        }]
      };

      //power
      let voltageChart = new CanvasJS.Chart('voltageChartContainer', voltageData);
      voltageChart.render();

      let currentChart = new CanvasJS.Chart('currentChartContainer', currentData);
      currentChart.render();

      let powerChart = new CanvasJS.Chart('powerChartContainer', powerData);
      powerChart.render();
    });
  }

  toggleDataSeries(e: any) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart1.render();
  }
}
