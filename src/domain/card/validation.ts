import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { CardExpiration, CardNumber, CardPassword } from '@/types/card';
import { getCurrentYear, isNumber } from '@/utils';

type ValidateInput = {
  name: string;
  value: string;
};

function isValidExpirationMonth(_month: string) {
  const 입력된자리수 = _month.length;

  const month = Number(_month);

  if (입력된자리수 === 0) {
    return true;
  }
  if (입력된자리수 === 1) {
    return month < 2;
  }

  return month > 0 && month < 13;
}

function isValidExpirationYear(_year: string) {
  const currentYear = getCurrentYear('yy');
  const 십의자리년도 = String(currentYear).split('').map(Number)[0];

  const 입력된자리수 = _year.length;

  const year = Number(_year);

  if (입력된자리수 === 0) {
    return true;
  }
  if (입력된자리수 === 1) {
    return year >= 십의자리년도;
  }

  return year >= currentYear;
}

export function validateCardExpiration({
  name,
  value,
  cardExpiration,
}: {
  cardExpiration: CardExpiration;
} & ValidateInput) {
  if (!(name in cardExpiration)) {
    throw new Error(ERROR_MESSAGE.INPUT.COMMON.INVALID_NAME(name));
  }

  if (!isNumber(value) && value !== '') {
    throw new Error(ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);
  }

  if (name === 'month' && !isValidExpirationMonth(value)) {
    throw new Error(ERROR_MESSAGE.INPUT.EXPIRATION.INVALID_MONTH);
  }
  if (name === 'year' && !isValidExpirationYear(value)) {
    throw new Error(ERROR_MESSAGE.INPUT.EXPIRATION.INVALID_YEAR);
  }
}

export function validateCardNumber({
  name,
  value,
  cardNumber,
}: {
  cardNumber: CardNumber;
} & ValidateInput) {
  if (!(name in cardNumber)) {
    throw new Error(ERROR_MESSAGE.INPUT.COMMON.INVALID_NAME(name));
  }

  if (!isNumber(value) && value !== '') {
    throw new Error(ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);
  }
}

export function validateCardPassword({ name, value, cardPassword }: { cardPassword: CardPassword } & ValidateInput) {
  if (!(name in cardPassword)) {
    throw new Error(ERROR_MESSAGE.INPUT.COMMON.INVALID_NAME(name));
  }
  if (!isNumber(value) && value !== '') {
    throw new Error(ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);
  }
}
