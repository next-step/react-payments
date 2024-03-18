import type { CardNumber } from '@/card';

export const isValidateCardNumber = (cardNumber: string): cardNumber is CardNumber =>
  /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(cardNumber);
