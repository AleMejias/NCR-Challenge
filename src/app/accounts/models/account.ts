export interface Data {
  cuentas: Cuenta[];
  cuestas: Cuesta[];
}

export interface Cuenta {
  e:           string;
  n:           string;
  t:           string;
  saldo:       string;
  moneda:      string;
  tipo_letras: string;
}

export interface Cuesta {
  id:     number;
  nombre: string;
}


