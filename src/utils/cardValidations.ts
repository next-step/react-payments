import { ERROR_MESSAGES } from '@/constants/message';
import { REGEX } from '@/constants/regex';
import { FormValues } from '@/type/formType';

export const CARD_HOLDER_NAME_MAX_LENGTH = 30;

const isValidType = (value: unknown): boolean => {
  return !isNaN(Number(value));
};

const isValidCardNumber = (cardNumber: string) => {
  return REGEX.CARD_NUMBER.test(cardNumber);
};

const isValidMonth = (month: string) => {
  const JANUARY = 1;
  const DECEMBER = 12;

  if (!REGEX.MONTH.test(month)) {
    return false;
  }

  return Number(month) >= JANUARY && Number(month) <= DECEMBER;
};

const isValidYear = (year: string) => {
  return REGEX.YEAR.test(year);
};

const isValidExpirationDate = (month: string, year: string) => {
  const currentDate = new Date();
  const expirationDate = new Date(`20${year}-${month}`);

  return currentDate < expirationDate;
};

const isValidCardHolderName = (cardHolderName: string) => {
  return cardHolderName.length <= CARD_HOLDER_NAME_MAX_LENGTH;
};

const isValidVerificationCode = (verificationCode: string) => {
  return REGEX.VERIFICATION_CODE.test(verificationCode);
};

const isValidPinNumber = (pinNumber: string) => {
  return REGEX.PIN_NUMBER.test(pinNumber);
};

export const validateCardNumbers = (
  values: FormValues,
  errors: Record<string, string> = {}
) => {
  if (!isValidType(values.cardNumber1)) {
    errors.cardNumber1 = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidCardNumber(values.cardNumber1)) {
    errors.cardNumber1 = ERROR_MESSAGES.INVALID_CARD_NUMBER;
  }

  if (!isValidType(values.cardNumber2)) {
    errors.cardNumber2 = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidCardNumber(values.cardNumber2)) {
    errors.cardNumber2 = ERROR_MESSAGES.INVALID_CARD_NUMBER;
  }

  if (!isValidType(values.cardNumber3)) {
    errors.cardNumber3 = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidCardNumber(values.cardNumber3)) {
    errors.cardNumber3 = ERROR_MESSAGES.INVALID_CARD_NUMBER;
  }

  if (!isValidType(values.cardNumber4)) {
    errors.cardNumber4 = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidCardNumber(values.cardNumber4)) {
    errors.cardNumber4 = ERROR_MESSAGES.INVALID_CARD_NUMBER;
  }

  return errors;
};

export const validateExpirationDate = (
  values: FormValues,
  errors: Record<string, string> = {}
) => {
  if (!isValidType(values.expirationMonth)) {
    errors.expirationMonth = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidMonth(values.expirationMonth)) {
    errors.expirationMonth = ERROR_MESSAGES.INVALID_MONTH;
  }

  if (!isValidYear(values.expirationYear)) {
    errors.expirationYear = ERROR_MESSAGES.INVALID_TYPE;
  }

  if (!isValidExpirationDate(values.expirationMonth, values.expirationYear)) {
    errors.expirationYear = ERROR_MESSAGES.EXPIRED_CARD;
  }

  return errors;
};

export const validateCardHolderName = (
  values: FormValues,
  errors: Record<string, string> = {}
) => {
  if (!isValidCardHolderName(values.cardHolderName)) {
    errors.cardHolderName = ERROR_MESSAGES.INVALID_CARD_HOLDER_NAME;
  }

  return errors;
};

export const validateVerificationCode = (
  values: FormValues,
  errors: Record<string, string> = {}
) => {
  if (!isValidVerificationCode(values.verificationCode)) {
    errors.verificationCode = ERROR_MESSAGES.INVALID_VERIFICATION_CODE;
  }

  return errors;
};

export const validatePinNumbers = (
  values: FormValues,
  errors: Record<string, string> = {}
) => {
  if (!isValidType(values.pinNumber1)) {
    errors.pinNumber1 = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidPinNumber(values.pinNumber1)) {
    errors.pinNumber1 = ERROR_MESSAGES.INVALID_PIN_NUMBER;
  }

  if (!isValidType(values.pinNumber2)) {
    errors.pinNumber2 = ERROR_MESSAGES.INVALID_TYPE;
  } else if (!isValidPinNumber(values.pinNumber2)) {
    errors.pinNumber2 = ERROR_MESSAGES.INVALID_PIN_NUMBER;
  }

  return errors;
};

export const cardValidate = (values: FormValues) => {
  const errors = {
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
  };

  validateCardNumbers(values, errors);
  validateExpirationDate(values, errors);
  validateCardHolderName(values, errors);
  validateVerificationCode(values, errors);
  validatePinNumbers(values, errors);

  return errors;
};
