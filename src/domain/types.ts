export type TSingleDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type TTwoDigit = `${TSingleDigit}${TSingleDigit}`;
export type TThreeDigit = `${TSingleDigit}${TSingleDigit}${TSingleDigit}`;
export type TFourDigit = `${TSingleDigit}${TSingleDigit}${TSingleDigit}${TSingleDigit}`;

export interface ICard {
  cardCompany?: string;
  cardNumber?: string;
  cardHolder?: string;
  expiredDate?: string;
  type?: 'small' | 'big';
  color?: string;
}

export interface ICardDTO extends ICard {
  index?: number;
  cardPassword?: number;
  cardSecurityCode?: number;
  nickname?: string;
}
