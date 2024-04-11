import { CardType } from '@/card/constants/cardType';

export const getCardValueSplitter = (type: CardType) => {
  const cardValueSplitters = {
    [CardType.CardNumber]: (value: string) => value.split(' '),
    [CardType.ExpirationDate]: (value: string) => value.split(' '),
    [CardType.SecurityCode]: (value: string) => value.split(''),
    [CardType.Password]: (value: string) => value.split(''),
    [CardType.OwnerName]: (value: string) => value.split(''),
  };

  return cardValueSplitters[type];
};

export const cardValueSplitters = {
  number: getCardValueSplitter(CardType.CardNumber),
  expirationDate: getCardValueSplitter(CardType.ExpirationDate),
  securityCode: getCardValueSplitter(CardType.SecurityCode),
  password: getCardValueSplitter(CardType.Password),
  ownerName: getCardValueSplitter(CardType.OwnerName),
};
