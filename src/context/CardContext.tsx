import React, {
  ChangeEvent,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Card, Company } from '../type';

const cardInitialData: Card = {
  cardNumber: ['', '', '', ''],
  expirationNumber: ['', ''],
  ownerName: '',
  cvc: '',
  password: ['', ''],
  company: {
    color: '',
    name: '',
  },
  alias: '',
};

const cardListInitialData: Card[] = [
  {
    cardNumber: ['1234', '4321', '1234', '4321'],
    expirationNumber: ['12', '24'],
    ownerName: '실',
    cvc: '123',
    password: ['1', '2'],
    company: {
      color: '#FBCD58',
      name: '썬 카드',
    },
    alias: '법카',
  },
];

interface CardContextProps {
  card: Card;
  setCard: Dispatch<SetStateAction<Card>>;
  cardList: Card[];
  setCardList: Dispatch<SetStateAction<Card[]>>;
  setCardInitialData: () => void;
  setCardEditingAlias: (card: Card) => void;
  addCard: (card: Card) => void;
  updateCard: (card: Card) => void;
  removeCard: (card: Card) => void;
  onChangeCardCompany: (company: Company) => void;
  onChangeCardNumber: (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onChangeExpirationNumber: (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onChangeOwner: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCvc: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const initialData: CardContextProps = {
  card: cardInitialData,
  setCard: () => {},
  cardList: cardListInitialData,
  setCardList: () => {},
  setCardInitialData: () => {},
  setCardEditingAlias: () => {},
  addCard: () => {},
  updateCard: () => {},
  removeCard: () => {},
  onChangeCardCompany: () => {},
  onChangeCardNumber: () => {},
  onChangeExpirationNumber: () => {},
  onChangeOwner: () => {},
  onChangeCvc: () => {},
  onChangePassword: () => {},
};

export const CardContext = createContext(initialData);

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider = ({ children }: CardProviderProps) => {
  const [cardList, setCardList] = useState<Card[]>(cardListInitialData);
  const [card, setCard] = useState<Card>(cardInitialData);
  const { cardNumber, expirationNumber, password } = card;

  const setCardInitialData = () => {
    setCard(cardInitialData);
  };

  const setCardEditingAlias = (card: Card) => {
    setCard({
      alias: card.alias,
      cardNumber: card.cardNumber,
      company: card.company,
      cvc: '',
      expirationNumber: card.expirationNumber,
      ownerName: card.ownerName,
      password: ['', ''],
    });
  };

  const addCard = (card: Card) => setCardList((prev) => [...prev, card]);

  const updateCard = (card: Card) => {
    const currentCardNumber = card.cardNumber.join('');
    const index = cardList.findIndex(
      ({ cardNumber }) => currentCardNumber === cardNumber.join('')
    );
    const newCardList = [...cardList];
    newCardList[index] = card;
    setCardList([...newCardList]);
  };

  const removeCard = (card: Card) => {
    const currentCardNumber = card.cardNumber.join('');

    const index = cardList.findIndex(
      ({ cardNumber }) => cardNumber.join('') === currentCardNumber
    );
    const newCardList = [...cardList];
    newCardList.splice(index, 1);
    setCardList([...newCardList]);
  };

  const onChangeCardNumber = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedCardNumber: Card['cardNumber'] = [...cardNumber];
    updatedCardNumber[index] = event.target.value.substring(0, 4);
    setCard({ ...card, cardNumber: [...updatedCardNumber] });
  };

  const onChangeExpirationNumber = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedExpirationNumber: Card['expirationNumber'] = [
      ...expirationNumber,
    ];
    updatedExpirationNumber[index] = event.target.value.substring(0, 2);
    setCard({ ...card, expirationNumber: [...updatedExpirationNumber] });
  };

  const onChangeOwner = (event: ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, ownerName: event.target.value });
  };

  const onChangeCvc = (event: ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, cvc: event.target.value.substring(0, 3) });
  };

  const onChangeCardCompany = (company: Company) => {
    setCard({ ...card, company });
  };

  const onChangePassword = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedPasswordNumber: Card['password'] = [...password];
    updatedPasswordNumber[index] = event.target.value;
    setCard({ ...card, password: [...updatedPasswordNumber] });
  };

  return (
    <CardContext.Provider
      value={{
        card,
        setCard,
        cardList,
        setCardList,
        setCardInitialData,
        setCardEditingAlias,
        addCard,
        updateCard,
        removeCard,
        onChangeCardCompany,
        onChangeCardNumber,
        onChangeExpirationNumber,
        onChangeOwner,
        onChangeCvc,
        onChangePassword,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
