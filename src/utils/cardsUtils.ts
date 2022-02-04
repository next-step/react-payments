import { initialCardValue } from './../models/card.model';
import { CardProps } from 'models/card.model';
import { createContext } from 'react';

interface CurrentCardProps {
  card: CardProps;
  setCard: (card: CardProps) => void;
  updateCardCompany: (name: string) => void;
  updateCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateExpiredDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addCard: () => void;
  deleteCard: (card: CardProps) => void;
}

export const CardListContext = createContext<CardProps[]>([]);

export const CurrentCardContext = createContext<CurrentCardProps>({
  card: initialCardValue,
  setCard: () => {},
  updateCardCompany: () => {},
  updateCardNumber: () => {},
  updateCVC: () => {},
  updateCardPassword: () => {},
  updateExpiredDate: () => {},
  updateUserName: () => {},
  addCard: () => {},
  deleteCard: () => {},
});
