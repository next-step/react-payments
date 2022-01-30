import { parse } from 'date-fns';
import { nanoid } from 'nanoid';
import { Card, CardForm } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

export const convertFormDataToCard = (cardForm: CardForm): Card => {
  return {
    id: nanoid(),
    CVC: cardForm.CVC,
    cardNumber: cardForm.cardNumber.join('-'),
    expireDate: parse(cardForm.expireDate.join(''), 'MMyy', new Date()),
    password: cardForm.password.join(''),
    userName: cardForm.userName,
    nickname: null,
    createdAt: new Date(),
  };
};

export const storeCard = (card: Card) => {
  const cardsStored = retrieveCards();

  setLocalStorage('cards', [...cardsStored, { ...card, createdAt: new Date() }]);
};

export const retrieveCards = (): Card[] => {
  const items = getLocalStorage('cards') ?? [];

  return items.map((item: any) => ({
    ...item,
    expireDate: new Date(item.expireDate),
    createdAt: new Date(item.createdAt),
  }));
};

export const updateCards = (cards: Card[]) => {
  setLocalStorage('cards', cards);
};

export const retrieveCardById = (cardId: string) => {
  const cards = retrieveCards();

  return cards.find((card) => card.id === cardId);
};

export const updateCardNickname = (cardId: string, nickname: string) => {
  const cards = retrieveCards();

  const targetIndex = cards.findIndex((card) => card.id === cardId);
  const targetCard = cards[targetIndex];

  targetCard.nickname = nickname;

  updateCards(cards);
};
