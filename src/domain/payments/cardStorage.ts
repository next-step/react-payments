import { ICard } from './types';

const CARD_STORAGE_KEY = 'enrolled-card-list';

export const getEnrolledCards = () => {
  try {
    const saved = localStorage.getItem(CARD_STORAGE_KEY) || '';
    const enrolled = JSON.parse(saved);

    if (Array.isArray(enrolled)) {
      return enrolled;
    }

    throw new Error('Invalid types');
  } catch (error) {
    console.error(error);
    localStorage.clear();
    return [];
  }
};

export const saveCard = (card: ICard) => {
  try {
    const createdAt = { createdAt: new Date().getTime() };

    const cards = getEnrolledCards();
    const compareCards = (card1: ICard, card2: ICard) => card1.numbers.join('') === card2.numbers.join('');
    const savedCard = cards.find((savedCard) => compareCards(savedCard, card));

    const newCardsList = [
      ...cards.filter((savedCard) => !compareCards(savedCard, card)),
      { ...(savedCard || card), ...createdAt },
    ];
    localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(newCardsList));

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
