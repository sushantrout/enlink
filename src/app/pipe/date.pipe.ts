import { TransactionUtil } from './../util/transaction.util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class DatePipe implements PipeTransform {
  util = new TransactionUtil();
  transform(value: any, ...args: unknown[]): any {
    return this.util.converToDate(value)
  }

}
