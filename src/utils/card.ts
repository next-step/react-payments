import { CardNumber } from '../types';

export const getMaskedCardNumberStr = (cardNumber: CardNumber) => {
  const cardNumberCopied = [...cardNumber];

  cardNumberCopied[2] = '*'.repeat(cardNumber[2].length);
  cardNumberCopied[3] = '*'.repeat(cardNumber[3].length);

  return cardNumberCopied.filter(Boolean).join(' - ');
};
