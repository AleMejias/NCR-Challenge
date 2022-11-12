import { Cuenta } from "../models/account";

export interface Pagination {

  cuentas: Cuenta[];
  buttonNextDisabled: boolean;
}
