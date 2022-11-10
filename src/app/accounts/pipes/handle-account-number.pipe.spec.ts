import { HandleAccountNumberPipe } from './handle-account-number.pipe';

describe('HandleAccountNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new HandleAccountNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
