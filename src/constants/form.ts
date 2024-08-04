export const initialFormData = Object.freeze({
  id: 0,
  updatedAt: new Date(),
  cardCompany: { id: '', name: '', color: '' },
  cardAlias: '',
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  expirationMonth: '',
  expirationYear: '',
  cardHolderName: '',
  verificationCode: '',
  pinNumber1: '',
  pinNumber2: '',
});

export const inputFields = Object.freeze({
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  expirationMonth: '',
  expirationYear: '',
  cardHolderName: '',
  verificationCode: '',
  pinNumber1: '',
  pinNumber2: '',
});

export const FIELD_INDEX_MAP: Record<string, number> = {
  cardNumber1: 1,
  cardNumber2: 2,
  cardNumber3: 3,
  cardNumber4: 4,
  expirationMonth: 5,
  expirationYear: 6,
  cardHolderName: 7,
  verificationCode: 8,
  pinNumber1: 9,
  pinNumber2: 10,
};
