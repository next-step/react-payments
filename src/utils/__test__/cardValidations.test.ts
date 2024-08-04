import { describe, it, expect } from 'vitest';
import {
  cardValidate,
  validateCardHolderName,
  validateCardNumbers,
  validateExpirationDate,
  validatePinNumbers,
  validateVerificationCode,
} from '../cardValidations';
import { ERROR_MESSAGES } from '@/constants/message';

describe('CardValidate', () => {
  it('should return empty errors for valid input', () => {
    const validValues = {
      cardNumber1: '1234',
      cardNumber2: '5678',
      cardNumber3: '9012',
      cardNumber4: '3456',
      expirationMonth: '12',
      expirationYear: '25',
      cardHolderName: 'John Doe',
      verificationCode: '123',
      pinNumber1: '1',
      pinNumber2: '2',
    };

    const errors = cardValidate(validValues);

    expect(errors).toEqual({
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
  });
});

describe('CardNumbers Testing', () => {
  it('should return invalid type error', () => {
    const invalidTypeValues = {
      cardNumber1: '1111',
      cardNumber2: '2222',
      cardNumber3: 'cccc',
      cardNumber4: '3333',
    };

    const { cardNumber3 } = validateCardNumbers(invalidTypeValues);

    expect(cardNumber3).toEqual(ERROR_MESSAGES.INVALID_TYPE);
  });

  it('should return invalid card number error', () => {
    const invalidTypeValues = {
      cardNumber1: '1111',
      cardNumber2: '222',
      cardNumber3: '3333',
      cardNumber4: '4444',
    };

    const { cardNumber2 } = validateCardNumbers(invalidTypeValues);

    expect(cardNumber2).toEqual(ERROR_MESSAGES.INVALID_CARD_NUMBER);
  });
});

describe('ExpirationDate Testing', () => {
  it('should return invalid type errors', () => {
    const invalidTypeValues = {
      expirationMonth: 'aa',
      expirationYear: '12',
    };

    const { expirationMonth } = validateExpirationDate(invalidTypeValues);

    expect(expirationMonth).toEqual(ERROR_MESSAGES.INVALID_TYPE);
  });

  it('should return expiration error', () => {
    const expirationDate = {
      expirationMonth: '12',
      expirationYear: '23',
    };

    const { expirationYear } = validateExpirationDate(expirationDate);

    expect(expirationYear).toEqual(ERROR_MESSAGES.EXPIRED_CARD);
  });

  it('should return invalid expirationMonth error', () => {
    const invalidExpirationMonth = {
      expirationMonth: '13',
      expirationYear: '25',
    };

    const { expirationMonth } = validateExpirationDate(invalidExpirationMonth);

    expect(expirationMonth).toEqual(ERROR_MESSAGES.INVALID_MONTH);
  });
});

describe('CardHolderName Testing', () => {
  it('should return invalid cardHolderName (exceeds max length) error', () => {
    const invalidCardHolderName = {
      cardHolderName:
        '30자가넘는카드소유자이름입니다30자가넘는카드소유자이름입니다',
    };

    const { cardHolderName } = validateCardHolderName(invalidCardHolderName);

    expect(cardHolderName).toEqual(ERROR_MESSAGES.INVALID_CARD_HOLDER_NAME);
  });
});

describe('VerificationCode Testing', () => {
  it('should return invalid verification (non-numeric value) error', () => {
    const invalidVerificationCode = {
      verificationCode: 'abc',
    };

    const { verificationCode } = validateVerificationCode(
      invalidVerificationCode
    );

    expect(verificationCode).toEqual(ERROR_MESSAGES.INVALID_VERIFICATION_CODE);
  });
});

describe('PinNumbers Testing', () => {
  it('should return invalid type errors', () => {
    const invalidTypeValues = {
      pinNumber1: '!',
      pinNumber2: 'a',
    };

    const { pinNumber1, pinNumber2 } = validatePinNumbers(invalidTypeValues);

    expect(pinNumber1).toEqual(ERROR_MESSAGES.INVALID_TYPE);
    expect(pinNumber2).toEqual(ERROR_MESSAGES.INVALID_TYPE);
  });

  it('should return invalid pinNumbers (only digit entered) error', () => {
    const invalidPinNumbers = {
      pinNumber1: '',
      pinNumber2: '9',
    };

    const { pinNumber1 } = validatePinNumbers(invalidPinNumbers);

    expect(pinNumber1).toEqual(ERROR_MESSAGES.INVALID_PIN_NUMBER);
  });
});
