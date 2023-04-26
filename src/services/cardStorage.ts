import { ICard } from '../domain/payments/types';
import { generateId } from '../util/identifier';

const CARD_STORAGE_KEY = 'enrolled-card-list';
const getCard = (cards: ICard[], card: ICard) => cards.find(({ id }) => id === card.id);

export const getSavedCards = () => {
  try {
    const saved = localStorage.getItem(CARD_STORAGE_KEY) || '[]';
    return JSON.parse(saved) as ICard[];
  } catch (error) {
    return [] as ICard[];
  }
};

export const saveCard = (newCard: ICard): ICard => {
  const createdAt = { createdAt: Date.now() };
  const updatedAt = { updatedAt: Date.now() };

  const savedCards = getSavedCards();
  const oldCard = getCard(savedCards, newCard);
  const others = savedCards.filter(({ id }) => id !== newCard.id);

  const newId = generateId();
  const newCards = [
    {
      ...(oldCard || { id: newId }),
      ...newCard,
      ...(oldCard ? updatedAt : createdAt),
    },
    ...others,
  ];
  newCards.sort(({ createdAt: a }, { createdAt: b }) => (b || 0) - (a || 0));

  localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(newCards));

  return { ...newCard, id: newId };
};

export const deleteCard = (card: ICard) => {
  const savedCards = getSavedCards();
  const savedCard = getCard(savedCards, card);

  if (!savedCard) {
    throw new Error('해당 카드가 저장되어 있지 않습니다');
  }

  const others = savedCards.filter(({ id }) => id !== card.id);
  localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(others));

  return true;
};
