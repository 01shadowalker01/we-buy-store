import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: "persianCurrency"
})
export class PersianCurrencyPipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}
  transform(value: string, args?: any): string {
    let tmp = this.currencyPipe
      .transform(value, "IRR")
    if (tmp){
      return tmp.replace("IRR", "تومان");
    }
  }
}
