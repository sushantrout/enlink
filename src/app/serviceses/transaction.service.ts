import { TransactionUtil } from './../util/transaction.util';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private util = new TransactionUtil();
  maxDate = new Date("2022-06-01").getTime();

  constructor(private apiService: ApiService) { }

  URL = "v1/rmu";

  get() {
    return this.apiService.get(this.URL).pipe(map((d: any) => { return (d['success']) })).pipe(map((d: any) => {
      let filterData = [];
      for (let cd of d) {
        if (this.util.converToDate(cd.date).getTime() > this.maxDate) {
          filterData.push(cd)
        }
      }
      return { 'success': filterData };
    }));
  }
}
