export type DigitType = {
  digit1: number | string;
  digit2: number | string;
  digit3: number | string;
  digit4: number | string;
};

export type CardStateType = {
  digits: DigitType;
  expire: string;
  name: string;
  cvc: string;
  passwords: { password1: string; password2: string };
  company: string;
  nickname: string;
  createdDate: number;
};

export interface CardInfoType {
  digits: DigitType;
  expire: string;
  name: string;
  cvc: string;
  passwords: { password1: string; password2: string };
  company: string;
  nickname: string;
  createdDate: number;
}

export type CardListDispatchType = {
  addCard: (data: CardInfoType) => void;
  updateNickname: (selectIdx: number, value: string) => void;
  deleteCard: (selectIdx: number) => void;
};
