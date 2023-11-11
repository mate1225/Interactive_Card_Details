export interface stateInterface {
  Cardholder: string;
  CardNumber: string;
  MM: string;
  YY: string;
  CVC: string;
  buttonSate: boolean;
}

export interface ErrorStateInterface {
  Cardholder: boolean;
  CardNumber: boolean;
  MM: boolean;
  YY: boolean;
  CVC: boolean;
  isContainFalse: boolean;
}
