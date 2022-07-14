import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviceses/auth.service';
import { LatestTransactionComponent } from './latest-transaction/latest-transaction.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  @ViewChild('latestTransaction')
  latestTransaction!: LatestTransactionComponent;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authService.authDetails = null;
    this.router.navigate(['/login']);
  }

  setChartData(event: string) {
    this.latestTransaction.refreshTable(event);
  }
}
