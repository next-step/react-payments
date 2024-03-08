import { FormType } from '@/type/formType';

const CARD_NUMBER_REGEX = /^\d{4}$/;
const MONTH_REGEX = /^\d{2}$/;
const YEAR_REGEX = /^\d{2}$/;
const VERIFICATION_CODE_REGEX = /^\d{3}$/;
const PIN_NUMBER_REGEX = /^\d{1}$/;

export const CARD_HOLDER_NAEM_MAX_LENGTH = 30;
const CURRENT_YEAR = Number(new Date().getFullYear().toString().slice(-2));

const isValidCardNumber = (cardNumber: string) => {
  return CARD_NUMBER_REGEX.test(cardNumber);
};

const isValidMonth = (month: string) => {
  if (!MONTH_REGEX.test(month)) {
    return false;
  }
  const monthNumber = Number(month);

  return monthNumber >= 1 && monthNumber <= 12;
};

const isValidYear = (year: string) => {
  if (!YEAR_REGEX.test(year)) {
    return false;
  }
  const yearNumber = Number(year);

  return yearNumber >= CURRENT_YEAR;
};

const isValidCardHolderName = (cardHolderName: string) => {
  return cardHolderName.length <= CARD_HOLDER_NAEM_MAX_LENGTH;
};

const isVerificationCode = (verificationCode: string) => {
  return VERIFICATION_CODE_REGEX.test(verificationCode);
};

const isValidPinNumber = (pinNumber: string) => {
  return PIN_NUMBER_REGEX.test(pinNumber);
};

export const cardValidate = (values: FormType) => {
  const errors: Record<keyof FormType, string> = {
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

  if (!isValidCardNumber(values.cardNumber1)) {
    errors.cardNumber1 = '카드 번호는 4개의 숫자를 입력해 주세요.';
  }

  if (!isValidMonth(values.expirationMonth)) {
    errors.expirationMonth = '월은 1이상 12이하 숫자여야 합니다.';
  }
  if (!isValidYear(values.expirationYear)) {
    errors.expirationYear = '만료일이 지난 카드입니다.';
  }
  if (!isValidCardHolderName(values.cardHolderName)) {
    errors.cardHolderName = '이름은 30자 이하로 입력해 주세요.';
  }
  if (!isVerificationCode(values.verificationCode)) {
    errors.verificationCode = '보안 코드는 숫자만 입력 가능합니다.';
  }
  if (!isValidPinNumber(values.pinNumber1)) {
    errors.pinNumber1 = '카드 비밀번호의 앞 2자리를 입력해 주세요.';
  }

  return errors;
};
