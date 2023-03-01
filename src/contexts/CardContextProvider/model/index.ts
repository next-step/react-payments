import type { ICard, CardNumber } from 'types/card';

const concatCardNumber = (cardNumber: CardNumber) => Object.values(cardNumber).join('');
const isMatchedCard = (cardA: ICard, cardB: ICard) =>
  concatCardNumber(cardA.cardNumber) === concatCardNumber(cardB.cardNumber);

export const filterCards = (cards: ICard[], target: ICard) => {
  const filteredCards = cards.filter((card) => !isMatchedCard(card, target));

  return filteredCards;
};

export const addOrUpdateCard = (cards: ICard[], newCard: ICard) => {
  const existedCard = cards.find((card) => isMatchedCard(card, newCard));

  if (!existedCard) {
    return [newCard, ...cards];
  }

  const updatedCards = cards.map((card) => (isMatchedCard(card, newCard) ? newCard : card));

  return updatedCards;
};
