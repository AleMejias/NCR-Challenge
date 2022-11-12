import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBalance'
})
export class FormatBalancePipe implements PipeTransform {

  transform( stringWithNumbers: string ): string {

    const onlyNumbers = stringWithNumbers.replace(/[^0-9]+/g, "");

    return onlyNumbers;
  }

}
