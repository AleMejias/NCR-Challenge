import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleAccountNumber'
})
export class HandleAccountNumberPipe implements PipeTransform {

  transform( accountNumber: string ): string  {

    let isEmpty: string = "No disponible";

    if( accountNumber.trim() !== "" ) { isEmpty = accountNumber }
    return isEmpty;
  }

}
