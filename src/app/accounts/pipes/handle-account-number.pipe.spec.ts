import { HandleAccountNumberPipe } from './handle-account-number.pipe';

describe('HandleAccountNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new HandleAccountNumberPipe();
    expect(pipe).toBeTruthy();
  });


  it('debe regresar "No disponible" si el número de cuenta recibido viene vacio' , () => {

    const pipe = new HandleAccountNumberPipe();
    const result = pipe.transform(" ".trim());

    expect(result).toEqual('No disponible');

  });

});
