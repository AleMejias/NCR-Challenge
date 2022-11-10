import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handleTypeAccount'
})
export class HandleTypeAccountPipe implements PipeTransform {

  transform( type: string ): string  {

    let setType: string = "";

    switch (type) {
      case 'CC':
        setType = 'Cuenta Corriente';
        break;

      default:
        setType = 'Caja de Ahorro';
    }

    return setType;
  }

}
