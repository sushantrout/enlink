export class TransactionUtil {
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
    
      converToDate(pDate: string) {
        let mydate = new Date();
        if (mydate) {
          if (pDate.includes('T')) {
            return new Date(pDate.replace('T', ' '));
          }
        }
        return pDate;
      }
}