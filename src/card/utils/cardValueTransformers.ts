import { CardType } from '@/card';

export const getCardValueTransformer = (type: CardType) => {
  const cardTransforms = {
    [CardType.CardNumber]: (value: string[]) => value.join(' '),
    [CardType.ExpirationDate]: (value: string[]) => value.join(' '),
    [CardType.SecurityCode]: (value: string[]) => value.join(''),
    [CardType.Password]: (value: string[]) => value.join(''),
    [CardType.OwnerName]: (value: string[]) => value.join(''),
  };

  return cardTransforms[type];
};

export const cardValueTransformers = {
  number: getCardValueTransformer(CardType.CardNumber),
  expirationDate: getCardValueTransformer(CardType.ExpirationDate),
  securityCode: getCardValueTransformer(CardType.SecurityCode),
  password: getCardValueTransformer(CardType.Password),
  ownerName: getCardValueTransformer(CardType.OwnerName),
};
