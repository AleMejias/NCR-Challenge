import { FormatBalancePipe } from './format-balance.pipe';

describe('FormatBalancePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatBalancePipe();
    expect(pipe).toBeTruthy();
  });

  it('debe regresar solo la parte numerica de la cadena recibida' , () => {

    const pipe = new FormatBalancePipe();
    const result = pipe.transform('2-65,002/_22');

    expect(result).toEqual('26500222');

  });

});
