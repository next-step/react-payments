import { ICard } from './types';

const CARD_STORAGE_KEY = 'enrolled-card-list';

const compareCards = (card1: ICard, card2: ICard) => card1.numbers.join('') === card2.numbers.join('');
const getCard = (card: ICard, cards: ICard[]) => cards.find((c) => compareCards(c, card));

export const getSavedCards = () => {
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

//TODO: saveCard, removeCard 리팱퉈륑

export const saveCard = (card: ICard) => {
  try {
    const createdAt = { createdAt: new Date().getTime() };
    const updatedAt = { updatedAt: new Date().getTime() };

    const cards = getSavedCards();
    const others = cards.filter((c) => !compareCards(c, card)); //
    const savedCard = getCard(card, cards);

    const newCardsList = [
      {
        ...savedCard,
        ...card,
        ...(savedCard ? updatedAt : createdAt),
      },
      ...others,
    ];
    newCardsList.sort(({ createdAt: a }, { createdAt: b }) => b - a);

    localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(newCardsList)); //
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const removeCard = (card: ICard) => {
  try {
    const cards = getSavedCards();
    const savedCard = getCard(card, cards);
    if (!savedCard) {
      throw new Error('해당 카드가 저장되어 있지 않습니다');
    }

    const others = cards.filter((c) => !compareCards(c, card)); //
    localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(others)); //

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
