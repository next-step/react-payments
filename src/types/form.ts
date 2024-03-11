export interface FormItems {
  id: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  expireDateMonth: string;
  expireDateYear: string;
  cardOwner?: string;
  cvc: string;
  password1: string;
  password2: string;
  password3: string;
  password4: string;
  cardName?: string;
}
export type FormItemKeys = keyof FormItems;
export type FormItemValues<T> = T[keyof T];

export type FormDataValue = Map<FormItemKeys, FormItemValues<FormItems>>;
