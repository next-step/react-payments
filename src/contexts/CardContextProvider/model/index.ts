import type { ICard, ICardWithoutId } from 'types/card';

const createCardId = () => new Date().getTime();

export const filterCards = (cards: ICard[], id: number) => {
  const filteredCards = cards.filter((card) => card.id !== id);

  return filteredCards;
};

export const addCard = (cards: ICard[], card: ICardWithoutId) => {
  const id = createCardId();
  const newCard: ICard = {
    id,
    ...card,
  };

  return [newCard, ...cards];
};

export const updateCard = (cards: ICard[], newCard: ICard) => {
  const updatedCards = cards.map((card) => (card.id === newCard.id ? newCard : card));

  return updatedCards;
};
