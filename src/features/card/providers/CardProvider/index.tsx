import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { CARD_INPUT } from '@/features/card/constants/cardInputValue';
import { CardInputInterface } from '@/features/card/types/cardTypes';

import { compareCardNumber } from '../../utils/validator';

interface CardContextInterface {
  input: CardInputInterface;
  onChange: (
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[keyof CardInputInterface],
  ) => void;
  cards: CardInputInterface[];
  addCard: (card: CardInputInterface) => void;
  editCard: ({
    cardNumber,
    card,
  }: {
    cardNumber: CardInputInterface['cardNumber'];
    card: CardInputInterface;
  }) => void;
  resetInput: () => void;
  setCurrentInput: (card: CardInputInterface) => void;
  deleteCard: (cardNumber: CardInputInterface['cardNumber']) => void;
}

const CardContext = createContext<CardContextInterface | null>(null);

interface Props {
  children: ReactNode;
}

const CardProvider = ({ children }: Props) => {
  const [input, setInput] = useState(CARD_INPUT);
  const [cards, setCards] = useState<CardInputInterface[]>([]);

  const onChange = useCallback(
    <T extends keyof CardInputInterface>(
      prop: keyof CardInputInterface,
      nextVal: CardInputInterface[T],
    ) => {
      setInput((prev) => ({ ...prev, [prop]: nextVal }));
    },
    [setInput],
  );

  const addCard = useCallback((card: CardInputInterface) => {
    setCards((prev) => [card, ...prev]);
  }, []);

  const editCard = useCallback(
    ({
      cardNumber,
      card,
    }: {
      cardNumber: CardInputInterface['cardNumber'];
      card: CardInputInterface;
    }) => {
      setCards((prev) =>
        prev.map((c) => (compareCardNumber(c.cardNumber, cardNumber) ? { ...c, ...card } : c)),
      );
    },
    [],
  );

  const resetInput = useCallback(() => {
    setInput(CARD_INPUT);
  }, []);

  const setCurrentInput = useCallback((card: CardInputInterface) => {
    setInput(card);
  }, []);

  const deleteCard = useCallback((cardNumber: CardInputInterface['cardNumber']) => {
    setCards((prev) => prev.filter((c) => !compareCardNumber(c.cardNumber, cardNumber)));
  }, []);

  const value = useMemo(
    () => ({
      input,
      cards,
      onChange,
      addCard,
      editCard,
      resetInput,
      setCurrentInput,
      deleteCard,
    }),
    [input, cards, onChange, addCard, editCard, resetInput, setCurrentInput, deleteCard],
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
};

export { CardProvider, useCard };
