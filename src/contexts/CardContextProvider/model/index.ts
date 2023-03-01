import type { CardType as Card, CardNumber } from 'types/card';

const concatCardNumber = (cardNumber: CardNumber) => Object.values(cardNumber).join('');
const isMatchedCard = (cardA: Card, cardB: Card) =>
  concatCardNumber(cardA.cardNumber) === concatCardNumber(cardB.cardNumber);

export const filterCards = (cards: Card[], target: Card) => {
  const filteredCards = cards.filter((card) => !isMatchedCard(card, target));

  return filteredCards;
};

export const addOrUpdateCard = (cards: Card[], newCard: Card) => {
  const existedCard = cards.find((card) => isMatchedCard(card, newCard));

  if (!existedCard) {
    return [newCard, ...cards];
  }

  const updatedCards = cards.map((card) => (isMatchedCard(card, newCard) ? newCard : card));

  return updatedCards;
};
