import { HandleTypeAccountPipe } from './handle-type-account.pipe';

describe('HandleTypeAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new HandleTypeAccountPipe();
    expect(pipe).toBeTruthy();
  });

  it('debe regresar "Cuenta Corriente" si atributo tipo_letra recibido es igual a "CC"' , () => {

    const pipe = new HandleTypeAccountPipe();
    const result = pipe.transform("CC".trim());

    expect(result).toEqual('Cuenta Corriente');

  });
  it('debe regresar "Caja de Ahorro" si atributo tipo_letra recibido es igual a "CA"' , () => {

    const pipe = new HandleTypeAccountPipe();
    const result = pipe.transform("CA".trim());

    expect(result).toEqual('Caja de Ahorro');

  });

});
