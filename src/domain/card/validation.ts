import { CARD } from '@/constants/card';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { Card, CardExpiration, CardNumber, CardPassword, CardSecretCode } from '@/types/card';
import { getCurrentYear, isNumber } from '@/utils';
import { assert } from '@/utils/validation';

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
  assert(name in cardExpiration, ERROR_MESSAGE.INPUT.COMMON.INVALID_NAME(name));

  assert(isNumber(value) || value === '', ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);

  assert(name !== 'month' || isValidExpirationMonth(value), ERROR_MESSAGE.INPUT.EXPIRATION.INVALID_MONTH);

  assert(name !== 'year' || isValidExpirationYear(value), ERROR_MESSAGE.INPUT.EXPIRATION.INVALID_YEAR);
}

export function validateCardNumber({
  name,
  value,
  cardNumber,
}: {
  cardNumber: CardNumber;
} & ValidateInput) {
  assert(name in cardNumber, ERROR_MESSAGE.INPUT.COMMON.INVALID_NAME(name));

  assert(isNumber(value) || value === '', ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);
}

export function validateCardPassword({ name, value, cardPassword }: { cardPassword: CardPassword } & ValidateInput) {
  assert(name in cardPassword, ERROR_MESSAGE.INPUT.COMMON.INVALID_NAME(name));

  assert(isNumber(value) || value === '', ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);
}

export function validateCardSecretCode(value: ValidateInput['value']) {
  assert(isNumber(value) || value === '', ERROR_MESSAGE.INPUT.COMMON.INVALID_VALUE);
}

export function validateCardForm({
  type,
  name,
  value,
  cardForm,
}: {
  type: string;
  cardForm: Card;
} & ValidateInput) {
  const { cardNumber, cardExpiration, cardPassword } = cardForm;

  const validate = {
    [CARD.NUMBER.TYPE]: () => validateCardNumber({ name, value, cardNumber }),
    [CARD.EXPIRATION.TYPE]: () => validateCardExpiration({ name, value, cardExpiration }),
    [CARD.PASSWORD.TYPE]: () => validateCardPassword({ name, value, cardPassword }),
    [CARD.SECRET_CODE.TYPE]: () => validateCardSecretCode(value),
  }[type];

  validate?.();
}
