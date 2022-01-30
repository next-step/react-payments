import { useEffect, useState } from 'react';
import { retrieveCards, storeCard, updateCards } from '../../service/card';
import { Card } from '../../types';

const sortByCreatedAt = (cards: Card[]) => {
  return [...cards].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const remove = (cardId: string) => {
    const cardsCopied = [...cards];
    const targetIndex = cardsCopied.findIndex((card) => card.id === cardId);

    cardsCopied.splice(targetIndex, 1);

    setCards(cardsCopied);
    updateCards(cardsCopied);
  };

  useEffect(() => {
    setCards(sortByCreatedAt(retrieveCards()));
  }, []);

  return { cards, remove };
};
