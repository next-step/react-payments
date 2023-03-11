import { Dispatch } from 'react';

export type DigitType = {
  digit1: number | string;
  digit2: number | string;
  digit3: number | string;
  digit4: number | string;
};

export interface CardInfoType {
  digits: DigitType;
  expire: string;
  name: string;
  cvc: string;
  passwords: { password1: string; password2: string };
  company: string;
  color: string;
  nickname: string;
  createdDate: number;
  isSizeBig?: boolean;
}

export type CardListDispatchType = {
  addCard: (data: CardInfoType) => void;
  updateNickname: (selectIdx: number, value: string) => void;
  deleteCard: (selectIdx: number) => void;
};

export type Action =
  | {
      type: 'SET_CARD_VALUE';
      target: HTMLInputElement;
    }
  | {
      type: 'SET_CARD_DIGIT';
      digits: DigitType;
    }
  | {
      type: 'SET_PASSWORD';
      passwords: { password1: string; password2: string };
    }
  | {
      type: 'SET_COMPANY';
      company: string;
      color: string;
    }
  | {
      type: 'INIT';
    };

export type CardDispatchType = Dispatch<Action>;
