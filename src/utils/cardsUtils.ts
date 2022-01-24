import { initialExpiredDateValue } from './../models/card.model';
import {
  CardProps,
  initialCardNumValue,
  initialCardPasswordValue,
} from 'models/card.model';
import { createContext } from 'react';

interface CurrentCardProps {
  card: CardProps;
  reset: () => void;
  setCard: (card: CardProps) => void;
  updateCardCompany: (name: string) => void;
  updateCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateExpiredDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCardNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setDefaultCardNickname: () => void;
  addCard: () => void;
  deleteCard: (card: CardProps) => void;
}

export const CardListContext = createContext<CardProps[]>([]);

export const CurrentCardContext = createContext<CurrentCardProps>({
  card: {
    cardNum: initialCardNumValue,
    userName: '',
    CVC: '',
    cardPassword: initialCardPasswordValue,
    cardNickname: '',
    expiredDate: initialExpiredDateValue,
    cardCompany: '',
  },
  reset: () => {},
  setCard: () => {},
  updateCardCompany: () => {},
  updateCardNumber: () => {},
  updateCVC: () => {},
  updateCardNickname: () => {},
  updateCardPassword: () => {},
  updateExpiredDate: () => {},
  updateUserName: () => {},
  setDefaultCardNickname: () => {},
  addCard: () => {},
  deleteCard: () => {},
});
